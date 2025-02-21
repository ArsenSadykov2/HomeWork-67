import { useDispatch, useSelector } from "react-redux";
import { addPassword, checkPassword, deletePassword } from "./CounterSlice.ts";
import { RootState } from "../app/store.ts";

const Password = () => {
    const value = useSelector((state: RootState) => state.password.value);
    const status = useSelector((state: RootState) => state.password.status);
    const info = useSelector((state: RootState) => state.password.info);
    const dispatch = useDispatch();

    const clickOnBtn = (key: string) => {
        if (key === 'E') {
            dispatch(checkPassword());
        }
    };

    return (
        <div className="container mt-5 border ">
            <div className="text-center mb-3">
                <p className={`fs-5 ${status === 'Denied' ? 'text-danger' : 'text-success'}`}>{info}</p>
            </div>

            <div className={`mb-4 text-center ${status === 'Correct' ? 'bg-success text-white' :'bg-danger text-white' }`}>
                {Array.from({ length: 4 }).map((_, index) => (
                    <span key={index}>
                        {value[index] ? '*' : ''}
                    </span>
                ))}
            </div>

            <hr className="mb-4" />

            <div className="d-grid gap-3 " style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((key) => (
                    <button
                        key={key}
                        className="btn btn-outline-primary btn-lg"
                        onClick={() => dispatch(addPassword(Number(key)))}
                    >
                        {key}
                    </button>
                ))}
                <button
                    className="btn btn-outline-danger"
                    onClick={() => dispatch(deletePassword())}
                >
                    {'<'}
                </button>
                <button
                    className="btn btn-outline-primary"
                    onClick={() => dispatch(addPassword(0))}
                >
                    {'0'}
                </button>
                <button
                    className="btn btn-outline-success"
                    onClick={() => clickOnBtn('E')}
                >
                    E
                </button>
            </div>
        </div>
    );
};

export default Password;