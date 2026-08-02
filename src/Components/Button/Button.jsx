const Button = ({ type, onClick, size, className = "", children, ...props }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      {...props}
      className={`${className}
      ${
        size === "full" 
        ?"w-full py-3 text-base gap-2 hover:gap-3 " 
        :size==="wide"?"mx-auto py-3 px-6 gap-3 hover:gap-5"
        : "text-sm py-3 px-4 gap-2 hover:gap-3"
      }
       primary-button group/button flex items-center justify-center font-semibold capitalize`}
    >
      {children}
    </button>
  );
};

export default Button;
