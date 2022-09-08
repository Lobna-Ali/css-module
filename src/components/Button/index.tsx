import * as React from "react";
import styles from "./index.module.scss";

/** Button Props Interface */
export interface ButtonProps {
    config: {
        text: string;
        disabled?: boolean;
    },
    styling: {
        theme: Themes;
        size: Sizes;
        fullWidth?: boolean;
    },
    eventHandlers?:{
        onClick?: () => void;
    }
    
};
/** Size enum */
export enum Sizes {
    standard = "standard",
    small = "small"
}

/** Button Themes enum */
export enum Themes {
    primary = "primary",
    secondary = "secondary",
    tertiary = "tertiary"
}

/**
 * Button Props
 * @param {ButtonProps} props 
 */
const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    const {theme, fullWidth, size} = props.styling;
    const {disabled, text} = props.config;

    return (
        <div className={`${styles['btn_wrapper']}`}>
            <button className={`${styles[theme]} ${styles[size]} ${fullWidth ? styles['full_width'] : ''}`}  disabled={disabled}>
                <span>{text}</span>
            </button>
        </div>
    );
}

export default Button;