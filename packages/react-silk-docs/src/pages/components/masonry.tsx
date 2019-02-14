import * as React from 'react'
import MyMom from '.'
import { Masonry } from 'react-silk-ui'

const images = [
  'https://scontent.fhan2-4.fna.fbcdn.net/v/t31.0-8/13730784_647810078709160_3846914210127211736_o.jpg?_nc_cat=100&_nc_oc=AQlRh6JpGJGsOoOtd_xxntS_pXSq4cRTlhrYNoGI_iDs7Ii_BBIlP1nndF1AOUu9LCo&_nc_ht=scontent.fhan2-4.fna&oh=64ff728527380abd0c837daa9984eb13&oe=5CFF6D9E',
  'https://scontent.fhan1-1.fna.fbcdn.net/v/t1.0-9/13872702_647810068709161_2783395564202007379_n.jpg?_nc_cat=108&_nc_oc=AQkuiH9WGW-qauK4Z_PCP4HpDbfYqEhtOEBx0i-k4KScoonIDu95aTOic8PC-phm92w&_nc_ht=scontent.fhan1-1.fna&oh=a6948beb2641f5eaa35f4b99f499e69e&oe=5CE66311',
  'https://scontent.fhan1-1.fna.fbcdn.net/v/t1.0-9/16142729_743187669171400_8051320599802458096_n.jpg?_nc_cat=101&_nc_oc=AQna21chEwEThpG3a6AFNWl_WfUwlVMuhxaYqOpCAC1S4HC5yxai8R0bfBw5ajS09O4&_nc_ht=scontent.fhan1-1.fna&oh=940af0f588e520b22a91a5d0269efb7f&oe=5CF26D4C',
  'https://scontent.fhan1-1.fna.fbcdn.net/v/t1.0-9/22140899_2020973071480658_6854329461592868833_n.jpg?_nc_cat=107&_nc_oc=AQl7P1svPUZaQvotsCaTZLrkCK7XN7jiccLht7ZBRDdgnZEPa38Q-yQ2iE3NfJRNirI&_nc_ht=scontent.fhan1-1.fna&oh=56b74f00a357db2fe337627496bf46fc&oe=5CEC6636',
  'https://scontent.fhan1-1.fna.fbcdn.net/v/t1.0-9/16142729_743187669171400_8051320599802458096_n.jpg?_nc_cat=101&_nc_oc=AQna21chEwEThpG3a6AFNWl_WfUwlVMuhxaYqOpCAC1S4HC5yxai8R0bfBw5ajS09O4&_nc_ht=scontent.fhan1-1.fna&oh=940af0f588e520b22a91a5d0269efb7f&oe=5CF26D4C',
  'https://scontent.fhan1-1.fna.fbcdn.net/v/t1.0-9/22140899_2020973071480658_6854329461592868833_n.jpg?_nc_cat=107&_nc_oc=AQl7P1svPUZaQvotsCaTZLrkCK7XN7jiccLht7ZBRDdgnZEPa38Q-yQ2iE3NfJRNirI&_nc_ht=scontent.fhan1-1.fna&oh=56b74f00a357db2fe337627496bf46fc&oe=5CEC6636',
  'https://scontent.fhan2-4.fna.fbcdn.net/v/t31.0-8/13730784_647810078709160_3846914210127211736_o.jpg?_nc_cat=100&_nc_oc=AQlRh6JpGJGsOoOtd_xxntS_pXSq4cRTlhrYNoGI_iDs7Ii_BBIlP1nndF1AOUu9LCo&_nc_ht=scontent.fhan2-4.fna&oh=64ff728527380abd0c837daa9984eb13&oe=5CFF6D9E',
  'https://scontent.fhan1-1.fna.fbcdn.net/v/t1.0-9/13872702_647810068709161_2783395564202007379_n.jpg?_nc_cat=108&_nc_oc=AQkuiH9WGW-qauK4Z_PCP4HpDbfYqEhtOEBx0i-k4KScoonIDu95aTOic8PC-phm92w&_nc_ht=scontent.fhan1-1.fna&oh=a6948beb2641f5eaa35f4b99f499e69e&oe=5CE66311',
  'https://scontent.fhan1-1.fna.fbcdn.net/v/t1.0-9/16142729_743187669171400_8051320599802458096_n.jpg?_nc_cat=101&_nc_oc=AQna21chEwEThpG3a6AFNWl_WfUwlVMuhxaYqOpCAC1S4HC5yxai8R0bfBw5ajS09O4&_nc_ht=scontent.fhan1-1.fna&oh=940af0f588e520b22a91a5d0269efb7f&oe=5CF26D4C',
]

export default () => (
  <MyMom>
    <Masonry images={images} />
  </MyMom>
)
