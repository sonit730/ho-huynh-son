import { Dialog, Transition } from "@headlessui/react";
import React, { FC, Fragment, ReactNode } from "react";
import { XIcon } from "@heroicons/react/outline";

interface Props {
    icon?: ReactNode;
    title: ReactNode;
    size?: "sm" | "md" | "lg";
    show: boolean;
    children: ReactNode[] | ReactNode;
    onClose: () => void;
}

const Modal: FC<Props> = ({
    title,
    show,
    children,
    onClose,
}) => {
    return (
        <Transition appear show={show} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 " />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto  bg-dark-first">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md  transform flex flex-col justify-start rounded-2xl bg-white dark:bg-dark-second text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-bold leading-6 text-black-100 dark:text-white px-6 pt-6 flex flex-none justify-between"
                                >
                                    <div>{title}</div>
                                    <XIcon className="w-5 h-5 cursor-pointer" onClick={onClose} />
                                </Dialog.Title>
                                <div className="mt-2 h-full">
                                    {children}
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>

    );
};
export default Modal