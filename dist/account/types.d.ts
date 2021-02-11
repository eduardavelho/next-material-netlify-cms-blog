export interface FormInput<Value> {
    value: Value;
    label: string;
    helperText: string;
    blur: boolean;
    touched: boolean;
    focus: boolean;
    error: boolean;
    onFocus: () => void;
    onBlur: () => void;
    onChange: (value: Value) => void;
}
