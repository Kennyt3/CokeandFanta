import GiftLink from './giftLink'
import SendMoney from './sendMoney'

interface WishList {
  gift: string
  price: string
  link: string
}
export const wish: WishList[] = [
  {
    gift: 'A trip to Zanzibar',
    price: 'N3,000,000',
    link: '',
  },
  {
    gift: 'Silver Crest 6.5 Litres Capacity Airfryer',
    price: 'N55,000',
    link: 'https://www.jumia.com.ng/silver-crest-6.5-litres-capacity-airfryer-92849858.html',
  },
  {
    gift: 'Silver Crest 2 Litres German Industrial Blender (SC-2030D)',
    price: 'N45,000',
    link: 'https://www.jumia.com.ng/silver-crest-2-litres-german-industrial-blender-sc-2030d-72172768.html',
  },
  {
    gift: 'Hisense 20L Manual Microwave Oven, Silver Mirror',
    price: 'N109,999',
    link: 'https://www.jumia.com.ng/20l-manual-microwave-oven-silver-mirror-mwo20moms10-h-hisense-mpg3832862.html',
  },
  {
    gift: 'Silver Crest 5.6L 12 In 1 Multi-Cooker Pot',
    price: 'N86,000',
    link: 'https://www.jumia.com.ng/5.6l-12-in-1-multi-cooker-pot-electric-pressure-pot-silver-crest-mpg2002450.html',
  },
  {
    gift: 'Bruhm BWT-080H 8kg Washine Machine',
    price: 'N202,000',
    link: 'https://www.jumia.com.ng/bruhm-bwt-080h-8kg-washine-machine-325479378.html',
  },
  {
    gift: 'Rice Cooker- 3L',
    price: 'N39,999',
    link: 'https://www.jumia.com.ng/generic-rice-cooker-3l-36820710.html',
  },
  {
    gift: 'Tower 5L Stainless Steel Stand Mixer - 1000W',
    price: 'N120,000',
    link: 'https://www.jumia.com.ng/tower-5l-stainless-steel-stand-mixer-1000w-80003263.html',
  },
  {
    gift: 'Haier Thermocool 200 Litres Chest Freezer (HTF-200)',
    price: 'N368,632',
    link: 'https://www.jumia.com.ng/tower-5l-stainless-steel-stand-mixer-1000w-80003263.html',
  },
  {
    gift: 'Sweet Home Sweethome Kitchen Dish Washer',
    price: '499,999',
    link: 'https://www.jumia.com.ng/sweet-home-sweethome-kitchen-dish-washer-stand-alone-307099170.html',
  },
  {
    gift: 'Homeflower 2.0 Channel High Power Tower Speaker System HF-2228',
    price: '250,000',
    link: 'https://www.jumia.com.ng/2.0-channel-high-power-tower-speaker-system-hf-2228-homeflower-mpg1204583.html',
  },
  {
    gift: 'Binatone 2 Slice Sandwich Maker (ST-801)',
    price: '48,500',
    link: 'https://www.jumia.com.ng/binatone-2-slice-sandwich-maker-st-801-15772095.html',
  },
  {
    gift: 'Tefal - Gran Perfectta Coffee Maker - 1.25L - CM442827',
    price: '65,300',
    link: 'https://www.jumia.com.ng/tefal-gran-perfectta-coffee-maker-1.25l-cm442827-263199107.html',
  },
  {
    gift: 'Portable Handheld Vacuum Cleaner, High Power, Strong Suction',
    price: '45,440',
    link: 'https://www.jumia.com.ng/generic-portable-handheld-vacuum-cleaner-high-power-strong-suction-257936066.html',
  },
  {
    gift: 'Sokany Electric Non-Stick Waffle Maker',
    price: '28,399',
    link: 'https://www.jumia.com.ng/sokany-electric-non-stick-waffle-maker-132887493.html',
  },
  {
    gift: 'Sumec Firman ECO10990ES Generator With Key Starter 7.0kva',
    price: '1,155,650',
    link: 'https://www.jumia.com.ng/sumec-firman-eco10990es-generator-with-key-starter-7.0kva-36893255.html',
  },
  {
    gift: 'Foldable Solid Portable Wardrobe Closet',
    price: '45,000',
    link: 'https://www.jumia.com.ng/fashion-foldable-solid-portable-wardrobe-closet-87105767.html',
  },
  {
    gift: '3L Ultrasonic Air Purifier & Humidifier-(Blue)',
    price: '49,950',
    link: 'https://www.jumia.com.ng/generic-3l-ultrasonic-air-purifier-humidifier-blue-101770680.html',
  },
]

export default function Wish() {
  return (
    <div className='wishBox'>
      <h3>Wedding Wishlist</h3>
      <div className=''>
        <div className='wish-container'>
          <div>
            <ul>
              {wish.map((e, index) => {
                return (
                  <li key={index} className='wish-item'>
                    <div>
                      <div>
                        <p>{e.gift}</p>
                        <h4>{e.price}</h4>
                      </div>
                    </div>
                    <div>
                      <div>
                        <SendMoney />
                      </div>
                      {e.link.length >= 1 && <GiftLink value={e.link} />}
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
