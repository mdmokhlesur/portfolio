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
        : "text-sm py-3 px-4 gap-1 hover:gap-2"
      }
       capitalize font-semibold flex justify-center items-center bg-red-700 rounded text-white duration-200 hover:bg-red-800 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-red-700`}
    >
      {children}
    </button>
  );
};

export default Button;
