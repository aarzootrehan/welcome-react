import { useRouteError } from 'react-router';

export const Error = () => {
    const err = useRouteError();
    console.log(" eRrr is: ", err);
    return (
        <div>
            <h2>Oopss, something went wrong!</h2>
            <span>{err.status} {err.statusText}</span>
        </div>
    )
}