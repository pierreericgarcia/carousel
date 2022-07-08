import classnames from "classnames";

function Button({ children, className, ...props }) {
  return (
    <button
      className={classnames("bg-slate-800 p-1 text-white", className)}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
