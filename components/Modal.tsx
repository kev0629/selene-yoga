import React, { PropsWithChildren } from "react";
import { Fragment, useRef, useState, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ModalContext } from "../context/ModalContext";

type Props = PropsWithChildren<{}>;

const Modal = (props: Props) => {
  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);

  const value = useContext(ModalContext);

  const openModal = () => {
    value?.setMainModalIsOpen(true);
  };

  const closeModal = () => {
    value?.setMainModalIsOpen(false);
  };

  return (
    <Transition.Root show={value?.mainModalIsOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={closeModal}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-gradient-to-b from-selene-green-dark to-selene-green text-left shadow-xl font-main transition-all sm:my-8 sm:w-full sm:max-w-lg text-white">
                <div className=" px-4 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-end rounded-md px-4 text-base font-medium focus:outline-none"
                    onClick={closeModal}
                    ref={cancelButtonRef}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className=" px-4 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className=" text-center sm:mt-0 sm:ml-4">
                      <Dialog.Title as="h3" className=" leading-6">
                        Namasté
                      </Dialog.Title>
                      <div className="flex justify-center">
                        <svg
                          width="24"
                          height="14"
                          viewBox="0 0 24 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M23.8404 7.21034C23.7622 7.09349 23.6565 6.99142 23.5299 6.91039C23.4032 6.82937 23.2583 6.7711 23.1041 6.73918C22.0643 6.52597 20.9836 6.49732 19.9301 6.65505C20.3778 4.98918 20.0893 3.6851 19.7908 2.92788C19.701 2.68963 19.5098 2.48804 19.2543 2.36214C18.9988 2.23624 18.6972 2.195 18.4077 2.24639C17.3813 2.44283 16.4108 2.80881 15.5521 3.32332C14.9447 2.09167 13.9672 1.01564 12.7164 0.201923C12.5097 0.0708528 12.2583 0 12 0C11.7417 0 11.4903 0.0708528 11.2836 0.201923C10.0328 1.01564 9.05527 2.09167 8.44788 3.32332C7.58917 2.80881 6.61872 2.44283 5.59225 2.24639C5.30285 2.195 5.00118 2.23624 4.74568 2.36214C4.49017 2.48804 4.29901 2.68963 4.20922 2.92788C3.91072 3.6851 3.62217 4.98918 4.06992 6.65505C3.0164 6.49732 1.93566 6.52597 0.895895 6.73918C0.741654 6.7711 0.596766 6.82937 0.470143 6.91039C0.34352 6.99142 0.237839 7.09349 0.159602 7.21034C0.00183516 7.44528 -0.0410163 7.72308 0.0402027 7.98438C0.3785 8.99399 1.41329 10.9291 4.54751 12.4603C7.68174 13.9916 10.4976 14 12 14C13.5024 14 16.2984 14 19.4525 12.4603C22.6066 10.9207 23.6215 8.99399 23.9598 7.98438C24.041 7.72308 23.9982 7.44528 23.8404 7.21034ZM18.5769 2.91106C18.6717 2.8923 18.7714 2.90438 18.8562 2.9449C18.941 2.98543 19.0047 3.05143 19.0346 3.12981C19.3231 3.88702 19.6117 5.23317 19.0047 6.96635C18.9948 6.98317 18.9948 7 18.9848 7.01683C18.7463 7.68263 18.4121 8.32121 17.9898 8.91827C17.1385 10.152 16.0055 11.2302 14.6566 12.0901L14.4079 12.2416C15.4128 11.1226 16.378 9.40625 16.378 6.93269C16.388 5.92753 16.2066 4.92755 15.8407 3.97115C16.6531 3.45705 17.5859 3.09562 18.5769 2.91106V2.91106ZM11.7612 0.740385C11.8301 0.696695 11.9139 0.673077 12 0.673077C12.0861 0.673077 12.1699 0.696695 12.2388 0.740385C13.2437 1.37981 15.582 3.2476 15.582 6.93269C15.582 8.8762 14.9452 10.5421 13.7014 11.8966C13.2235 12.4269 12.6493 12.8898 12 13.268C11.3507 12.8898 10.7765 12.4269 10.2986 11.8966C9.05483 10.5421 8.41803 8.8762 8.41803 6.93269C8.41803 3.2476 10.7563 1.37981 11.7612 0.740385V0.740385ZM4.96541 3.12981C4.99531 3.05143 5.05898 2.98543 5.14377 2.9449C5.22856 2.90438 5.32827 2.8923 5.42311 2.91106C6.41406 3.09562 7.34695 3.45705 8.15933 3.97115C7.79341 4.92755 7.61199 5.92753 7.62204 6.93269C7.62204 9.40625 8.58718 11.1226 9.59212 12.2416L9.34337 12.0901C7.99453 11.2302 6.86146 10.152 6.01015 8.91827C5.58766 8.31833 5.25352 7.67695 5.01516 7.00841L4.99526 6.96635C4.38832 5.23317 4.67686 3.88702 4.96541 3.12981V3.12981ZM0.806346 7.79928C0.792755 7.75709 0.789275 7.71302 0.79611 7.66968C0.802944 7.62633 0.819956 7.58458 0.846146 7.54688C0.901208 7.47163 0.985699 7.41507 1.08494 7.38702C2.14518 7.17977 3.24698 7.17689 4.30872 7.37861C4.56679 8.03147 4.90354 8.66017 5.31366 9.25481C6.5972 11.1394 8.46778 12.4856 9.98017 13.2596C8.2038 13.1125 6.4862 12.6418 4.94551 11.8798C2.05009 10.4663 1.11479 8.71635 0.806346 7.79928ZM23.1937 7.79928C22.8852 8.71635 21.9499 10.4663 19.0545 11.8798C17.5138 12.6418 15.7962 13.1125 14.0198 13.2596C15.5322 12.4856 17.4028 11.1394 18.6863 9.25481C19.0965 8.66017 19.4332 8.03147 19.6913 7.37861C20.753 7.17689 21.8548 7.17977 22.9151 7.38702C23.0143 7.41507 23.0988 7.47163 23.1539 7.54688C23.18 7.58458 23.1971 7.62633 23.2039 7.66968C23.2107 7.71302 23.2072 7.75709 23.1937 7.79928V7.79928Z"
                            fill="white"
                          />
                        </svg>
                      </div>

                      <div className="mt-2">
                        <p className="text-sm ">{props.children}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
