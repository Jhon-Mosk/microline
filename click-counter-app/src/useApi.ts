import { useState } from "react";
import axios from "axios";

const useApi = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<any>(null);
    const [serverCount, setServerCount] = useState<number | null>(null);

    const postData = async (count: number) => {
        setLoading(true);
        try {
            const response = await axios.post(
                "https://lk.zont-online.ru/api/button_count",
                { count },
                { headers: { "X-ZONT-Client": "jhon-mosk@yandex.ru" } }
            );
            setServerCount(response.data.count);
            return response.data;
        } catch (error) {
            setError(error);
            return null;
        } finally {
            setLoading(false);
        }
    };

    return { loading, error, serverCount, postData };
};

export default useApi;
