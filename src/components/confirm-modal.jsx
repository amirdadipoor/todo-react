"use client";

import { Button, Modal, ModalBody, ModalHeader } from "flowbite-react";
import { useState } from "react";
// import { HiOutlineExclamationCircle } from "react-icons/hi";

export default function ConfirmModal({isOpen , task}) {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            {/*<Button onClick={() => setOpenModal(true)}>Toggle modal</Button>*/}
            <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
                <ModalHeader />
                <ModalBody>
                    <div className="text-center">
                        {/*<HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />*/}
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            {/*Are you sure you want to delete <strong>{task.task}</strong> item?*/}
                        </h3>
                        <div className="flex justify-center gap-4">
                            <Button color="failure" onClick={() => setOpenModal(false)}>
                                {"Yes, I'm sure"}
                            </Button>
                            <Button color="gray" onClick={() => setOpenModal(false)}>
                                No, cancel
                            </Button>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </>
    );
}