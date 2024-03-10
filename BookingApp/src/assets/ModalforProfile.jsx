

import { Button, FileInput, Label, Modal } from 'flowbite-react';
import { useState } from 'react';

function ModalforProfile() {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Terms of Service</Modal.Header>
                <Modal.Body>

                    {/* for image upload */}
                    <div>
                        <div>
                            <Label htmlFor="file-upload-helper-text" value="Upload file" />
                        </div>
                        <FileInput id="file-upload-helper-text" helperText="SVG, PNG, JPG or GIF (MAX. 800x400px)." />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setOpenModal(false)}>I accept</Button>
                    <Button color="gray" onClick={() => setOpenModal(false)}>
                        Decline
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ModalforProfile;