import React, { useState, useEffect } from "react";
import useApi from "./useApi";
import Stack from "@mui/material/Stack";
import { LoadingButton } from "@mui/lab";
import Alert from "@mui/material/Alert";

const App: React.FC = () => {
    const [clicks, setClicks] = useState(0);
    const { loading, error, serverCount, postData } = useApi();

    useEffect(() => {
        let timer: NodeJS.Timeout;

        if (clicks > 0) {
            timer = setTimeout(() => {
                postData(clicks).then((res: any) => {
                    if (res !== null) {
                        console.log(res);
                    }
                });
                setClicks(0);
            }, 1000);
        }
        return () => clearTimeout(timer);
    }, [clicks, postData]);

    return (
        <Stack sx={{ width: "50%", margin: "0 auto" }} spacing={2}>
            <LoadingButton
                variant="contained"
                loading={loading}
                onClick={() => setClicks(clicks + 1)}
                disabled={loading}
                sx={{
                    background: "orange",
                    color: "black",
                }}
            >
                <span>Кликнуть</span>
            </LoadingButton>
            {error ? (
                <Alert severity="error">Error: {error.message}</Alert>
            ) : (
                <>
                    <Alert severity="info">Кликнули {clicks} раз</Alert>
                    <Alert severity="warning">По версии сервера {serverCount || 0}</Alert>
                </>
            )}
        </Stack>
    );
};

export default App;
