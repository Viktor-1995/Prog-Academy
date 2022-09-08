import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import FullProfileInfo from "./FullProfileInfo";

function FullProfile() {
    const popover = (
        <Popover id="popover-basic">
            <Popover.Header as="h3" className="text-center">
                Full Profile Info
            </Popover.Header>

            <Popover.Body>
                <FullProfileInfo />
            </Popover.Body>
        </Popover>
    );

    return (
        <div className="fullprofile">
            <OverlayTrigger trigger="click" placement="left" overlay={popover}>
                <Button variant="secondary">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        class="bi bi-person-fill"
                        viewBox="0 0 16 16"
                    >
                        <path d="M3  14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                </Button>
            </OverlayTrigger>
        </div>
    );
}

export default FullProfile;
