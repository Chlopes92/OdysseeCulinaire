import Modal from "components/Modal/Modal";
import { useState } from "react";

const PaymentPage = () => {

    const [isOpen, setModal] = useState(true);
    const toggleModal = () => {
        setModal(!isOpen);
    }

    return (
        <main>
            {isOpen && <Modal />

            }

        </main>

    );
}

export default PaymentPage;