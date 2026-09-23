import React from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { CheckCircle2, ShoppingBag, X } from "lucide-react";

const OrderSuccessModal = ({ isOpen, onClose, product }) => {
  const { darkMode } = useTheme();
  const navigate = useNavigate();

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/50 backdrop-blur-xl transition-all duration-300">
      <div
        className={`w-full max-w-md p-6 sm:p-8 rounded-3xl relative transition-all duration-300 ${
          darkMode
            ? "glass-modal-dark text-white"
            : "glass-modal-light text-black"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 p-2.5 rounded-full cursor-pointer transition-all ${
            darkMode
              ? "glass-btn-dark hover:text-white"
              : "glass-btn-light hover:text-black"
          }`}
        >
          <X size={16} />
        </button>

        {/* Modal Header Icon */}
        <div className="w-14 h-14 mx-auto mb-5 rounded-2xl flex items-center justify-center bg-emerald-500/15 text-emerald-500 border border-emerald-500/30 backdrop-blur-md shadow-inner">
          <CheckCircle2 size={30} />
        </div>

        <h3 className="text-xl sm:text-2xl font-semibold text-center mb-2 tracking-tight">
          Order Placed Successfully!
        </h3>

        <p
          className={`text-sm text-center mb-6 leading-relaxed ${
            darkMode ? "text-[#aaa]" : "text-[#555]"
          }`}
        >
          Your order for <strong className={darkMode ? "text-white" : "text-black"}>{product.name}</strong> ({product.price}) has been placed. You can view its status anytime in your User Dashboard.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => {
              onClose();
              navigate("/profile");
            }}
            className={`flex-1 py-3.5 px-5 rounded-full font-medium text-sm flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-md ${
              darkMode
                ? "bg-white text-black hover:bg-neutral-200"
                : "bg-black text-white hover:bg-neutral-800"
            }`}
          >
            <ShoppingBag size={16} />
            <span>View Dashboard</span>
          </button>

          <button
            onClick={onClose}
            className={`py-3.5 px-5 rounded-full font-medium text-sm transition-all duration-200 cursor-pointer ${
              darkMode
                ? "glass-btn-dark"
                : "glass-btn-light"
            }`}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessModal;
