import { useState, useEffect } from "react";
import * as Location from "expo-location";

export const useLocation = () => {
    const [location, setLocation] = useState(null);

    useEffect(() => {
        (async () => {
            const { granted } = await Location.requestForegroundPermissionsAsync();
            if (!granted) return;
            // setErrorMsg("Permission to access location was denied");

            const {
                coords: { longitude, latitude },
            } = await Location.getCurrentPositionAsync({});
            setLocation({ longitude, latitude });
        })();
    }, []);

    return location;
};
