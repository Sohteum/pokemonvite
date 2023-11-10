import axios from "axios";

export const ADMIN_API_PATH = process.env.REACT_APP_ADMIN_URL;
export async function AdminLogin (params )  {
    try {
        const response = await axios.post(
            `${ADMIN_API_PATH}/api/admin/login`,
                params
            /*{
                headers: {
                    Ssoinfo: Ssoinfo,
                    Userid: Userid,
                    Userbirth: Userbirth,
                },
            }*/
        );
        return response.data;
        //
    } catch (error) {
        // 오류 처리
        console.error("Error:", error);
        throw error;
    }
};


// import.meta