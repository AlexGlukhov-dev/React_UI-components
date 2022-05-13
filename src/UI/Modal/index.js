import cn from 'classnames';


import classes from "./modal.module.scss";

const Modal = ({active, setActive, children}) => {
    return (
        <div className={cn(classes["modal"], active && classes["active"] )} onClick={() => setActive(false)}>
            <div className={cn(classes["modal__content"],  active && classes["active"])} onClick={e => e.stopPropagation()}>
              <button className={classes["modal__closeBtn"]} onClick={() => setActive(false)}>
                <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="9.90039" y="31.1128" width="30" height="1" transform="rotate(-45 9.90039 31.1128)" fill="black"/>
                  <rect x="11.3145" y="9.89966" width="30" height="0.999999" transform="rotate(45 11.3145 9.89966)" fill="black"/>
                </svg>
              </button>
              {children}
            </div>
        </div>
    );
};

export default Modal;