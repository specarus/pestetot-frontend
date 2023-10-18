import { ModalContext } from "@/app/contexts/ModalContext";
import { useContext } from "react";

import RegisterModal from "./RegisterModal";
import LoginModal from "./LoginModal";

interface AccountModalProps {
  modal: number;
  setModal: (value: number) => void;
  setShowAccountModal: (value: boolean) => void;
}

const Account: React.FC<AccountModalProps> = ({
  modal,
  setModal,
  setShowAccountModal,
}) => {
  const { resetUser, resetLoginUser, resetFocuses, resetLoginFocuses } =
    useContext(ModalContext);

  return (
    <div>
      <div className="absolute desktop:-top-12 laptop:-top-10 laptop:left-8 desktop:text-base laptop:text-sm right-8 desktop:h-10 laptop:h-8 bg-white flex border border-gray-100 rounded-full overflow-hidden">
        <button
          onClick={() => {
            setModal(1);
            resetUser();
            resetFocuses();
          }}
          className={`${
            modal === 1 && "bg-primary text-white"
          } w-full h-full border-r border-gray-300 hover:bg-primary hover:text-white transition-all duration-200`}
        >
          Conectare
        </button>
        <button
          onClick={() => {
            setModal(2);
            resetLoginUser();
            resetLoginFocuses();
          }}
          className={`${
            modal === 2 && "bg-primary text-white"
          } w-full h-full hover:bg-primary hover:text-white transition-all duration-200`}
        >
          Inregistrare
        </button>
      </div>
      <div className="w-full h-full">
        {modal === 1 && (
          <LoginModal
            setModal={setModal}
            setShowAccountModal={setShowAccountModal}
          />
        )}
        {modal === 2 && <RegisterModal setModal={setModal} />}
      </div>
    </div>
  );
};

export default Account;
