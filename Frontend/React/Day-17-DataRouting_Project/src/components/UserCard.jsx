import { h1 } from "framer-motion/client";

const UserCard = ({ user,}) => {
    return (
        <>
        
            <tr
                key={user.id}
                className="transition hover:bg-gray-50"
            >

                {/* Name */}
                <td className="px-6 py-4">
                    <div className="flex items-center gap-3">

                        {/* Avatar */}
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-600">
                            {user.name?.firstname?.[0]?.toUpperCase()}
                            {user.name?.lastname?.[0]?.toUpperCase()}
                        </div>

                        <div>
                            <p className="font-medium capitalize text-gray-900">
                                {user.name?.firstname} {user.name?.lastname}
                            </p>

                            <p className="text-xs text-gray-400">
                                User #{user.id}
                            </p>
                        </div>

                    </div>
                </td>

                {/* Email */}
                <td className="px-6 py-4 text-sm text-gray-600">
                    {user.email}
                </td>

                {/* Username */}
                <td className="px-6 py-4">
                    <span className="rounded-md bg-gray-100 px-2 py-1 text-sm text-gray-600">
                        @{user.username}
                    </span>
                </td>

                {/* Phone */}
                <td className="px-6 py-4 text-sm text-gray-600">
                    {user.phone}
                </td>

                {/* ID */}
                <td className="px-6 py-4">
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
                        #{user.id}
                    </span>
                </td>

            </tr>
        </>
    );
};

export default UserCard;