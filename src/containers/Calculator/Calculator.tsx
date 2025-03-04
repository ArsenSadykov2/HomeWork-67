import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../app/store.ts";
import {addNumbers, calculate, deleteNumbers} from "./CalculatorSlice.ts";

const buttons = [ '7', '8', '9', '/', '4', '5', '6', '*','1', '2', '3', '0', '-', '+', 'C','=',];

const Calculator = () => {
    const value = useSelector((state: RootState) => state.calculator.value);
    const dispatch = useDispatch();

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="card-body">
                    <div className="display bg-light p-3 mb-3 text-end rounded"  style={{width: "100%", fontSize: "2rem", height: "50px"}}>
                        {value}
                    </div>
                    <div className="buttons">
                        <div className="row">
                            {buttons.map((button) => {
                                let buttonClass = "btn btn-secondary m-1";
                                if (button === 'C') {
                                    buttonClass = "btn btn-danger m-1";
                                } else if (button === '=') {
                                    buttonClass = "btn btn-success m-1";
                                }

                                return (
                                    <div key={button} className="col-3 p-2">
                                        <button
                                            className={buttonClass}
                                            style={{width: "100%", fontSize: "1.5rem"}}
                                            onClick={() => {
                                                if (button === 'C') {
                                                    dispatch(deleteNumbers());
                                                } else if (button === '=') {
                                                    dispatch(calculate());
                                                } else {
                                                    dispatch(addNumbers(button));
                                                }
                                            }}
                                        >
                                            {button}
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;