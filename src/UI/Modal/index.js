import classes from "modal.module.scss";

const Modal = ({children, ...props}) => {
    return (
        <div className={classes["modal"]} {...props}>
            {children}
        </div>
    );
};

export default Modal;