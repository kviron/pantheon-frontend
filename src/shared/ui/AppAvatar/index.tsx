import { Avatar, AvatarProps } from 'antd';

type AppAvatarProps = AvatarProps & {};

export const AppAvatar = (props: AppAvatarProps) => {
    return <Avatar {...props} />;
};
