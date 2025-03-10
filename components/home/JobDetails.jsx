"use client";
import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import { useSearchParams } from 'next/navigation';
import axios from 'axios';
import { FaMapMarkerAlt, FaMoneyBillAlt, FaBriefcase, FaCalendarAlt, FaPhoneAlt, FaUserAlt, FaTimesCircle } from 'react-icons/fa';
import apiConfig from "@/app.config";
import LoginPopup from "@/components/common/form/login/LoginPopup";
import MobileMenu from "@/components/header/MobileMenu";
import DefaulHeader2 from "@/components/header/DefaultHeader";
import FooterDefault from "@/components/footer/common-footer";
import DashboardAdminHeader from '@/components/header/DashboardAdminHeader';
import DashboardJobseekerHeader from '@/components/header/DashboardJobseekerHeader';
import GlobalConfig from '@/Global.config';

const JobDetails = () => {
    const searchParams = useSearchParams();
    const jobUrl = searchParams.get('jobUrl'); // Get jobUrl from query string
    const [jobDetails, setJobDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [userType, setUserType] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [modalActions, setModalActions] = useState("")
    const [modalTitle, setModalTitle] = useState("");
    const [isModalSuccess, setIsModalSuccess] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const router = useRouter();
    const [appliedJobs, setAppliedJobs] = useState([]);

    // Extract jobExternalID from jobUrl
    const extractJobID = (url) => {
        const regex = /\/(\d+)\?/; // Regex to match the job ID in the URL
        const match = url?.match(regex);
        return match ? match[1] : null;
    };

    const jobExternalID = extractJobID(jobUrl);

    const fetchAppliedJobs = async (token) => {
        try {
            const response = await axios.get(`${apiConfig.url}/job-seeker/myjobApplications`, {
                headers: { Authorization: `Bearer ${token}` }
            });

            // Ensure response.data exists and is an array
            if (Array.isArray(response.data)) {
                setAppliedJobs(response.data.map(application => application.jobPost?.externalID));
            } else {
                console.error("Unexpected response format:", response.data);
                setAppliedJobs([]);
            }
        } catch (error) {
            console.error('Error fetching applied jobs:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (jobExternalID) {
            const token = localStorage.getItem("accessToken");
            if (token) {
                fetchAppliedJobs(token);
            } else {
                setLoading(false);
            }
        }
    }, [jobExternalID]);

    const isApplied = appliedJobs.includes(parseInt(jobExternalID)); // Compare as number


    const checkLogin = () => {
        const token = localStorage.getItem("accessToken");
        setIsLoggedIn(token != null);
    }
    useEffect(() => {
        try {
            // Attempt to parse modalMessage as JSON
            const parsedMessage = JSON.parse(modalMessage);
            // If it's an array, store it in state
            if (Array.isArray(parsedMessage)) {
                const router = useRouter();
                // router.push('/jobseeker-dashboard/my-profile');
                window.location.reload();
            } else {
                // If it's a string, wrap it in an array
                setModalMessage(modalMessage);
            }
        } catch (error) {
            // If parsing fails, assume modalMessage is just a string
            setModalMessage(modalMessage);

        }
    }, [modalMessage]);

    useEffect(() => {
        const storedUserType = localStorage.getItem('userType');
        if (storedUserType) {
            setUserType(JSON.parse(storedUserType));
        }
        checkLogin();
    }, []);


    const applyToJob = async () => {
        const token = localStorage.getItem("accessToken");

        if (!token) {
            localStorage.setItem("redirectAfterLogin", window.location.href);
            console.log("URL saved for redirect:", window.location.href);
            router.push("/login");
            return;
        }

        // Show confirmation dialog before proceeding
        setModalTitle("Confirm Application");
        setModalMessage("Are you sure you want to apply for this job?");
        setModalActions([
            {
                label: "No",
                onClick: () => setShowModal(false),
                className: "bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400",
            },
            {
                label: "Yes",
                onClick: async () => {
                    setShowModal(false); // Close confirmation modal before proceeding

                    const regex = /\/(\d+)\?/;
                    const match = jobUrl.match(regex);
                    console.log(jobDetails.employer, "check this");

                    const jobData = {
                        isExternal: true,
                        job_title: jobDetails.jobTitle,
                        job_description: jobDetails.jobDescription,
                        deadline_date: jobDetails.applicationDeadline,
                        hours: jobDetails.hours,
                        rate: jobDetails.salary,
                        salary: jobDetails.salary,
                        city: jobDetails.location,
                        country: "Canada",
                        map_location: jobDetails.employer,
                        education: jobDetails.education,
                    };

                    try {
                        const response = await axios.post(
                            `${apiConfig.url}/job-seeker/apply/?postID=${match[1]}`,
                            jobData,
                            {
                                headers: {
                                    Authorization: `Bearer ${token}`,
                                },
                            }
                        );

                        if (response.status === 201) {
                            setModalTitle("Application Submitted");
                            setModalMessage(
                                "Thank you for submitting your request. An FFI agent will contact you shortly."
                            );
                            setModalActions([
                                {
                                    label: "OK",
                                    onClick: () => {
                                        setShowModal(false);
                                        window.location.reload(); // Reload the page
                                    },
                                },
                            ]);
                            setShowModal(true);
                        }
                    } catch (error) {
                        try {
                            const parsedMessage = JSON.parse(error.response?.data?.message);
                            if (Array.isArray(parsedMessage)) {
                                localStorage.setItem("redirectAfterLogin", window.location.href);
                                setModalTitle("Profile Incomplete");
                                setModalMessage(
                                    "To apply for this job, please complete your profile.<br /><br />Update your profile now?"
                                );
                                setModalActions([
                                    {
                                        label: "No",
                                        onClick: () => setShowModal(false),
                                        className: "bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400",
                                    },
                                    {
                                        label: "Yes",
                                        onClick: () => router.push("/jobseeker-dashboard/my-profile"),
                                        className: "bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700",
                                    },
                                ]);
                                setShowModal(true);
                                return;
                            }
                        } catch (err) {
                            setModalTitle("Application Notice");
                            setModalMessage(
                                error.response?.data?.message || "An error occurred while applying."
                            );
                            setModalActions([{ label: "OK", onClick: () => setShowModal(false) }]);
                            setShowModal(true);
                        }
                        setIsModalSuccess(false);
                        setShowModal(true);
                    }
                },
                className: "bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700",
            },
        ]);
        setShowModal(true);
    };


    useEffect(() => {
        if (!jobUrl) {
            setError("No job URL provided.");
            setLoading(false);
            return;
        }


        const fetchJobDetails = async () => {
            try {
                const response = await axios.get(`${apiConfig.url}/canada-jobs/job`, {
                    params: { url: jobUrl }
                });
                setJobDetails(response.data);
            } catch (err) {
                console.error("Error fetching job details:", err);
                setError("An error occurred while fetching job details.");
            } finally {
                setLoading(false);
            }
        };

        fetchJobDetails();
    }, [jobUrl]);

    if (loading) return <div>Loading job details...</div>;
    if (error) return <div>{error}</div>;
    if (!jobDetails) return <div>No job details found.</div>;

    return (
        <>
            <span className="header-span"></span>
            <LoginPopup />
            {userType === 1 && <DashboardAdminHeader />}
            {userType === 3 && <DashboardEmployerHeader />}
            {userType === 4 && <DashboardJobseekerHeader />}
            {userType === 5 && <DashboardStudentHeader />}
            {userType !== 1 && userType !== 3 && userType !== 4 && userType !== 5 && <DefaulHeader2 />}

            <MobileMenu />

            <section className="job-detail-section" style={{ padding: '40px 20px' }}>
                <div className="auto-container">
                    <div className="sec-title">
                        <h2 style={{ color: GlobalConfig.BgrClr1 }}>{jobDetails.jobTitle}</h2>
                    </div>
                    <div className="job-details">
                        <p><FaUserAlt style={{ marginRight: '8px' }} /><strong>Posted On:</strong> {jobDetails.datePosted}</p>
                        <p><FaUserAlt style={{ marginRight: '8px' }} /><strong>Employer:</strong> {jobDetails.employer}</p>
                        <p><FaMapMarkerAlt style={{ marginRight: '8px' }} /><strong>Location:</strong> {jobDetails.location || 'Not Provided'}</p>
                        <p><FaMoneyBillAlt style={{ marginRight: '8px' }} /><strong>Salary:</strong> {jobDetails.salary || 'Not Provided'}</p>
                        <p><FaBriefcase style={{ marginRight: '8px' }} /><strong>Employment Type:</strong> {jobDetails.employmentType}</p>
                        <p><FaBriefcase style={{ marginRight: '8px' }} /><strong>Vacancies:</strong> {jobDetails.vacancies || 'Not Provided'}</p>
                        <br />
                        <br />
                        <h3 style={{ color: GlobalConfig.BgrClr1 }}>Job Description</h3>
                        <p>{jobDetails.jobDescription}</p>
                        <br />
                        <h3 style={{ color: GlobalConfig.BgrClr1 }}>Qualifications</h3>
                        <p>{jobDetails.qualifications}</p>
                        <br />
                        <h3 style={{ color: GlobalConfig.BgrClr1 }}>Work Conditions</h3>
                        <p>{jobDetails.workConditions}</p>
                        <br />
                        <h3 style={{ color: GlobalConfig.BgrClr1 }}>Application Deadline</h3>
                        <p>{jobDetails.applicationDeadline}</p>
                        <br />
                        <h3 style={{ color: GlobalConfig.BgrClr1 }}>Contact Information</h3>
                        <p>{jobDetails.contactInfo || 'Not Provided'}</p>
                    </div>
                    <br />
                    <div className="btn-box text-center"
                        style={{
                            display: 'flex',
                            padding: '20px 20px',
                            cursor: isApplied ? 'default' : 'pointer',
                            opacity: isApplied ? 0.6 : 1
                        }}
                        onClick={() => {
                            if (!isApplied) applyToJob();
                        }}
                    >
                        <span className="theme-btn btn-style-one" style={{
                            color: "white",
                            backgroundColor: GlobalConfig.BgrClr1,
                            padding: '12px 24px',
                            borderRadius: '5px',
                            fontWeight: 'bold',
                            boxShadow: "0px 4px 6px rgba(66, 43, 43, 0.1)"
                        }}>
                            {isApplied ? "Applied" : "Apply Now"}
                        </span>
                    </div>
                    {!isLoggedIn && <p className="text-red-300 text-[15px]" style={{ color: GlobalConfig.BgrClr1 }}> * You need to sign in to apply</p>}

                    {showModal && (
                        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                                <h5 className="text-lg font-bold text-red-600">{modalTitle}</h5>
                                <p className="mt-2" dangerouslySetInnerHTML={{ __html: modalMessage }}></p>
                                <div className="flex justify-center gap-4 mt-4">
                                    {modalActions.map((action, index) => (
                                        <button
                                            key={index}
                                            onClick={action.onClick}
                                            style={{
                                                backgroundColor: action.label === "No" ? "#d1d5db" : GlobalConfig.BgrClr1,
                                                color: "white",
                                                padding: "5px 10px",
                                                borderRadius: "6px",
                                                margin: "10px 8px"
                                            }}
                                        >
                                            {action.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </section>
            <FooterDefault />
        </>
    );
};

export default JobDetails;
