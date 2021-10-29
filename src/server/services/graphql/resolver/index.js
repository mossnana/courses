import helpers from '../../../helpers';

const shops = [
  {
    id: 1,
    title: 'มอสบะหมี่สายเขียว',
    vendors: [
      {
        id: 1,
        firstName: 'เพิ่มพูน',
        lastName: 'เชาวนพูนผล',
        vendorType: ['B2B'],
      },
    ],
  },
];

const resolvers = {
  RootQuery: {
    getShops() {
      return shops;
    },
  },
  RootMutation: {
    addShop(root, { shop, user }) {
      helpers.logger.log({ level: 'info', message: 'hello logger' });
      const newShop = {
        ...shop,
        vendors: [
          user,
        ],
      };

      const newShops = [
        ...shops,
        newShop,
      ];

      return newShops;
    },
  },
};

export default resolvers;
