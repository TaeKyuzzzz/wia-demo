import React from 'react';
const {  Space, Table, Tag  } = require('antd');
const columns = [
    {
        title: 'Category',
        dataIndex: 'category',
        key: 'category',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Number of ...',
        dataIndex: 'no',
        key: 'no',
    },
    {
        title: 'Movement ...',
        dataIndex: 'mdots',
        key: 'mdots',
    },
    {
        title: 'Movement time',
        dataIndex: 'mt',
        key: 'mt',
    },
    {
        title: 'Number of movement (pair)',
        dataIndex: 'nomp',
        key: 'nomp',
    },
    {
        title: 'Movement distance (pair)',
        dataIndex: 'mdp',
        key: 'mdp',
    },
    {
        title: 'Movement time (pair)',
        dataIndex: 'mtp',
        key: 'mtp',
    },
    {
        title: 'Number of switch arm off',
        dataIndex: 'saoff',
        key: 'saoff',
    },
    {
        title: 'Number of switch arm on',
        dataIndex: 'saon',
        key: 'saon',
    },
    {
        title: 'Lookup',
        dataIndex: 'lu',
        key: 'lu',
    },
    // {
    //     title: 'Tags',
    //     key: 'tags',
    //     dataIndex: 'tags',
    //     render: (_, { tags }) => (
    //         <>
    //             {tags.map((tag) => {
    //                 let color = tag.length > 5 ? 'geekblue' : 'green';
    //                 if (tag === 'loser') {
    //                     color = 'volcano';
    //                 }
    //                 return (
    //                     <Tag color={color} key={tag}>
    //                         {tag.toUpperCase()}
    //                     </Tag>
    //                 );
    //             })}
    //         </>
    //     ),
    // },
    // {
    //     title: 'Action',
    //     key: 'action',
    //     render: (_, record) => (
    //         <Space size="middle">
    //             <a>Invite {record.name}</a>
    //             <a>Delete</a>
    //         </Space>
    //     ),
    // },
];

const data = [
    {
        key: '1',
        category: 'a',
        name: 'John Brown',
        no: 32,
        mdots: 'move....',
        mt: '17:03:26',
        nomp: 5,
        mdp: 10,
        mtp: '16:05:05',
        saoff: 3,
        saon: 3,
        lu: 'datas',
    },
    // {
    //     key: '2',
    //     category: 'b',
    //     name: 'Tom Jerry',
    //     no: 32,
    //     mdots: 'Washington No. 1 Lake Park',
    //     mt: ['nice', 'developer'],
    //     nomp:,
    //     mdp: ,
    //     mtp: ,
    //     saoff: ,
    //     saon: ,
    //     lu: ,
    // },
    // {
    //     key: '3',
    //     category: 'c',
    //     name: 'Cinderella',
    //     no: 32,
    //     mdots: 'Boston No. 1 Lake Park',
    //     mt: ['nice', 'developer'],
    //     nomp:,
    //     mdp: ,
    //     mtp: ,
    //     saoff: ,
    //     saon: ,
    //     lu: ,
    // },
];

class CustomTable extends React.Component {
    render() {
        return (
            <Table columns={columns} dataSource={data} />
        );
    }
}

export default CustomTable;
