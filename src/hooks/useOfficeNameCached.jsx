import { useContext, useEffect, useState } from "react";
import { OfficeNameContext } from "../context/OfficeNameContext";
import useSingleOfficeApi from "./useSingleOfficeApi ";

const useOfficeNameCached = (officeMlsId) => {
    const { getOfficeName, cacheOfficeName } = useContext(OfficeNameContext);
    const [officeName, setOfficeName] = useState(getOfficeName(officeMlsId));

    // Use the custom office hook in lazy mode unless we need it
    const { data, loading } = useSingleOfficeApi(officeMlsId, !officeMlsId || !!getOfficeName(officeMlsId))

    useEffect(() => {
        const cached = getOfficeName(officeMlsId);
        if (cached) {
            setOfficeName(cached);
        } else if (data && data.value && data.value.length > 0) {
            const name = data.value[0].OfficeName;
            setOfficeName(name);
            cacheOfficeName(officeMlsId, name);
        }
    }, [officeMlsId, data, getOfficeName, cacheOfficeName]);

    return officeName;
};

export default useOfficeNameCached;