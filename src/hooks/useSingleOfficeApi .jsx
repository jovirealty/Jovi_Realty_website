import useBridgeApi from "./useBridgeApi";

const useSingleOfficeApi = (officeMlsId, lazy=false) => {
    // Return empty if no id
    if (!officeMlsId) return { data: null, loading: false, error: null, refetch: () => {} };

    const { data, loading, error, refetch } = useBridgeApi(
        'Offices',
        {
            $filter: `MainOfficeMlsId eq '${officeMlsId}'`,
            $top: 1,
        },
        lazy,
    );

    return { data, loading, error, refetch };
};

export default useSingleOfficeApi