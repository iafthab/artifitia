/* eslint-disable react/prop-types */
import { forwardRef } from "react";

export const Dialog = forwardRef(function MyDialog(
  { children, toggleDialog },
  ref
) {
  return (
    <dialog ref={ref} className=" z-10 rounded-xl backdrop:bg-gray-800/50">
      <div className="w-fit p-10 flex flex-col gap-4">
        {children}
        <div className="flex flex-row font-montserrat justify-center space-x-4 font-medium text-xl mt-2">
          <button
            className="hover:bg-gold/80 px-8 py-1 uppercase bg-gold text-white rounded-md"
            type="button"
            // onClick={onSubmit}
          >
            Add
          </button>
          <button
            className="hover:bg-grey/80 px-4 py-2 uppercase bg-grey/50 rounded-md"
            onClick={toggleDialog}
            type="button"
          >
            Discard
          </button>
        </div>
      </div>
    </dialog>
  );
});

export default Dialog;
