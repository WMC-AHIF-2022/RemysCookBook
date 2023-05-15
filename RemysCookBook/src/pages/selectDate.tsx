import {NextPage} from "next";
import {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Layout from "RemysCookBook/layout/layout";
import {useParams} from "next/navigation";
import {useRouter} from "next/router";



const SelectDate: NextPage = () => {
    const router = useRouter();
    const [startDate, setStartDate] = useState(new Date());
    const [storedDate, setStoredDate] = useState(null);

    const handleOkButtonClick = () => {
        sessionStorage.setItem('date-selected', startDate.toDateString());
        router.push("/weekplaner/weekplaner");
    };

    return (
        <>
            <Layout>
                <div className="mt-24 bg-teal-200 rounded-xl pl-10 pr-10 pb-18">
                    <h1 className="headline flex flex-col items-center justify-center font-bold text-3xl text-stone-100 pt-8">Select Date:</h1>
                    <div className="mt-8">
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date!)}
                            inline
                        />
                        <button className="flex flex-col items-center justify-center bg-teal-600 hover:bg-teal-700 text-white mt-8 mb-5 ml-40 py-3 px-7 text-m rounded-full" onClick={handleOkButtonClick}>Ok</button>
                    </div>
                </div>
            </Layout>

        </>

    );
}

export default SelectDate