import { Input, List, Button, Skeleton } from 'antd';
import { SearchOutlined, PlusOutlined, UserOutlined } from '@ant-design/icons';
import { Item, Resizer, Sidebar } from './controls.tsx';
import { useLibraryStore } from '@/pages/LibraryPage/model/store.tsx';
import { AppAvatar } from '@/shared/ui/AppAvatar';
import { Game } from '@/entities/Game';
import { useHorizontalResize } from '@/shared/hooks/useHorizontalResize.ts';

type LibraryPageSidebarProps = {
    games?: Game[];
    isLoading: boolean;
    isFetching: boolean;
};

export const LibraryPageSidebar = (props: LibraryPageSidebarProps) => {
    const { games, isLoading } = props;
    const { setSelectGame, selectedGame } = useLibraryStore();

    const {
        isResizing,
        resizerRef,
        startResizing,
        ref: sidebarRef,
        width: sidebarWidth,
    } = useHorizontalResize({ minWidth: 200, initWidth: 270, maxWidth: 600 });

    return (
        <Sidebar
            ref={sidebarRef}
            width={sidebarWidth}
            style={{ transition: 'none' }}
        >
            <List
                loading={isLoading}
                size={'small'}
                header={
                    <div style={{ padding: '.5rem', display: 'flex', gap: '.5rem' }}>
                        <Input
                            placeholder='Поиск'
                            prefix={<SearchOutlined />}
                        />
                        <Button type={'dashed'}>
                            <PlusOutlined />
                        </Button>
                    </div>
                }
                dataSource={games}
                renderItem={item => (
                    <Item
                        isActive={item.id === selectedGame?.id}
                        onClick={() => {
                            setSelectGame(item);
                        }}
                        onContextMenu={(e: any) => console.log(e)}
                    >
                        <Skeleton
                            loading={isLoading}
                            avatar
                            active
                        >
                            <List.Item.Meta
                                avatar={
                                    <AppAvatar
                                        src={item.icon?.path}
                                        shape='square'
                                        size={'small'}
                                        icon={<UserOutlined />}
                                    />
                                }
                                title={item.name}
                            ></List.Item.Meta>
                        </Skeleton>
                    </Item>
                )}
            />
            <Resizer
                ref={resizerRef}
                onMouseDown={startResizing}
                isResizing={isResizing}
            />
        </Sidebar>
    );
};
