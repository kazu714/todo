// app/components/TextField.tsx
import { css } from "styled-system/css";

interface TextFieldProps {
    value?: string;
    name?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    required?: boolean;
}

const TextField: React.FC<TextFieldProps> = ({
    value,
    name,
    onChange,
    disabled = false,
    required = false,
    }) => {
    return (
        <div>
            <input
                type="text"
                value={value}
                name={name}
                onChange={onChange}
                disabled={disabled}
                required={required}
                className={css({
                    width: "100%",
                    padding: "0.3rem 1rem",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    fontSize: "1rem",
                    outline: "none",
                    transition: "border-color 0.2s",
                    "&:focus": {
                        borderColor: "#007bff",
                    },
                    "&:disabled": {
                        backgroundColor: "#f0f0f0",
                        borderColor: "#ddd",
                    },
                })}
            />
        </div>
    );
};

export default TextField;
