import { notFound } from "next/navigation";
import UserDetail from "./UserDetail";

type UserType = 'user' | 'merchant';

export default function UserPage({ params }: { params: { userId: string, typeOfUser: UserType } }) {
    if (params.typeOfUser !== 'user' && params.typeOfUser !== 'merchant') {
        notFound();
    }
    return (
        <>
            <UserDetail typeOfUser={params.typeOfUser}/>
        </>
    );
}
