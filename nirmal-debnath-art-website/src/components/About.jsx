// Keep About static or create a small static artist object
const artist = {
  name: 'Nirmal Debnath',
  address: 'B1/298, Birpara Road, Kalyani, Nadia, West Bengal',
  contact: { phone: '', email: '', upi: '', bank: '' },
  bio: 'Indian artist specializing in soft pastels and watercolor.',
}

export default function About() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">About</h1>
      <p className="opacity-80">{artist.bio}</p>
      <div className="space-y-1 text-sm">
        <div>Name: {artist.name}</div>
        <div>Address: {artist.address}</div>
        <div>Email: {artist.contact.email}</div>
        <div>Phone: {artist.contact.phone}</div>
        <div>UPI: {artist.contact.upi}</div>
        <div>Bank: {artist.contact.bank}</div>
      </div>
    </div>
  )
}