"use client";

import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import useRentModal from "@/app/hooks/useRentModal";
import Avatar from "../Avatar";
import { useRouter } from "next/navigation";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const router = useRouter();
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const rentModal = useRentModal();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const onRent = useCallback(() => {
    if (!currentUser) {
      setIsOpen(false);
      loginModal.onOpen();
      return;
    }

    rentModal.onOpen();
  }, [currentUser, loginModal, rentModal]);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={onRent}
          className="
            hidden
            md:block
            text-sm
            font-semibold
            py-3
            px-4
            rounded-full
            hover:bg-neutral-100
            transition
            cursor-pointer
          "
        >
          Staybnb your home
        </div>
        <div
          onClick={toggleOpen}
          className={`
            p-4
            md:py-1
            md:px-2
            border-[1px]
            border-neutral-200
            flex
            flex-row
            items-center
            gap-3
            rounded-full
            cursor-pointer
            hover:shadow-md
            transition
            ${isOpen ? "shadow-md" : "shadow-none"}
          `}
        >
          <AiOutlineMenu size={18} />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="
            absolute
            rounded-xl
            shadow-[1px_2px_10px_3px_rgb(0_0_0_/_0.1),_0_2px_4px_-2px_rgb(0_0_0_/_0.1)]
            w-[40vw]
            md:w-3/4
            bg-white
            right-0
            overflow-hidden
            top-12
            text-sm
          "
        >
          <div
            className="
              flex
              flex-col
              cursor-pointer
              shadow-lg
            "
          >
            {currentUser ? (
              <>
                <MenuItem
                  onClick={() => {
                    router.push("/trips");
                    toggleOpen();
                  }}
                  label="My Trips"
                />
                <MenuItem
                  onClick={() => {
                    router.push("/favorites");
                    toggleOpen();
                  }}
                  label="My Favorites"
                />
                <MenuItem
                  onClick={() => {
                    router.push("/reservations");
                    toggleOpen();
                  }}
                  label="My Reservations"
                />
                <MenuItem
                  onClick={() => {
                    router.push("/properties");
                    toggleOpen();
                  }}
                  label="My Properties"
                />
                <MenuItem
                  onClick={() => {
                    toggleOpen();
                    rentModal.onOpen();
                  }}
                  label="Staybnb My Home"
                />
                <hr />
                <MenuItem onClick={() => signOut()} label="Logout" />
              </>
            ) : (
              <>
                <MenuItem
                  onClick={() => {
                    toggleOpen();
                    loginModal.onOpen();
                  }}
                  label="Login"
                />
                <MenuItem
                  onClick={() => {
                    toggleOpen();
                    registerModal.onOpen();
                  }}
                  label="Sign up"
                />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
