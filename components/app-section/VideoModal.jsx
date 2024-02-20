import { useEffect } from "react";
import { Modal } from "bootstrap";
import './transition.scss'


const VideoModal = ({ showModal, videoUrl, closeModal }) => {
    useEffect(() => {
        const modalElement = document.getElementById("exampleModal");
        const modal = new Modal(modalElement);
        if (showModal) {
            modal.show();
        } else {
            modal.hide();
        }
    }, [showModal]);

    return (
        <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} // Adjust the opacity here
        >
            <div className="modal-dialog modal-dialog-centered modal-lg"> {/* Added modal-lg for large size */}
                <div className="modal-content" style={{ zIndex: 1050 }}>
                    {/* <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div> */}
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
