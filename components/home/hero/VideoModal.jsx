import { useEffect, useRef } from "react";
import { Modal } from "bootstrap";
import './transition.scss'


const VideoModal = ({ showModal, videoUrl, closeModal }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const modalElement = document.getElementById("exampleModal");
        const modal = new Modal(modalElement, { backdrop: 'static' });

        const handleClose = () => {
            // Stop the video when the modal is closed
            if (videoRef.current) {
                videoRef.current.pause();
                videoRef.current.currentTime = 0;
            }
            // Manually remove modal-open class from body
            document.body.classList.remove('modal-open');
            // Reset body overflow style
            document.body.style.overflow = '';
        };

        if (showModal) {
            modal.show();
        } else {
            modal.hide();
            handleClose(); // Call handleClose when modal is hidden
        }

        // Cleanup function
        return () => {
            handleClose(); // Call handleClose when component unmounts
        };
    }, [showModal]);

    return (
        <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} // Adjust the opacity here
        >
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content" style={{ zIndex: 1050 }}>
                    <div className="modal-header">
                        <button type="button" className="btn-close" aria-label="Close" onClick={closeModal}></button>
                    </div>
                    <div className="modal-body">
                        <video controls autoPlay style={{ maxWidth: '100%', maxHeight: '100%' }}>
                            <source src={videoUrl} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoModal;
