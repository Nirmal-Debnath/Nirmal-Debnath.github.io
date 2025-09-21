// Static data; update paths to match files under public/images
export const artist = {
  name: 'Nirmal Debnath',
  address: 'B1/298, Birpara Road, Kalyani, Nadia, West Bengal',
  contact: { phone: '', email: '', upi: '', bank: '' },
  bio: 'Indian artist specializing in soft pastels and watercolor.',
}

export const sections = [
  {
    id: 'soft-pastel',
    title: 'Soft Pastel',
    items: [
      { id: 'sp1', title: 'Pastel Dawn', medium: 'Soft Pastel', src: '/images/soft-pastel/sp1.jpg' },
      { id: 'sp2', title: 'Pastel Fields', medium: 'Soft Pastel', src: '/images/soft-pastel/sp2.jpg' },
    ],
  },
  {
    id: 'watercolor',
    title: 'Watercolor',
    items: [
      { id: 'wc1', title: 'Monsoon Lane', medium: 'Watercolor', src: '/images/watercolor/wc1.jpg' },
      { id: 'wc2', title: 'Riverside', medium: 'Watercolor', src: '/images/watercolor/wc2.jpg' },
    ],
  },
]