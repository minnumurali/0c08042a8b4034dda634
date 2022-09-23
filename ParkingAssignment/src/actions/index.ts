import axios from "axios";

export const checkStatus = async (regNo: string, amount: number): Promise<boolean> => {

    const body = {
        "car-registration": regNo,
        "charge": amount
    }

    try {
        const data = await axios.post("https://httpstat.us/200", body);
        if(data?.data?.code === 200){
            return true;
        }
    } catch(e) {}
    return false;
}