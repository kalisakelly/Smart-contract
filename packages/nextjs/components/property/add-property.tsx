
// packages\nextjs\components\property\add-property.tsx
'use client'

import { useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Label } from "../ui/label"
import { Switch } from "../ui/switch"
import { X} from 'lucide-react'
import { ImageUpload } from './ImageUpload'

enum PropertyType {
  House = 'House',
  Apartment = 'Apartment',
  Land = 'Land',
  Car = 'Car',
  Other = 'Other'
}

export default function AddProperty() {
  const router = useRouter()
  const [property, setProperty] = useState({
    name: '',
    images: [],
    descriptions: '',
    amount: '',
    propertyType: '',
    contacts: '',
    email: '',
    available: true,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setProperty(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value, name) => {
    setProperty(prev => ({ ...prev, [name]: value }))
  }

  const handleImageUpload = useCallback((files) => {
    setProperty(prev => ({ ...prev, images: [...prev.images, ...files] }))
  }, [])

  const handleImageDelete = (index) => {
    setProperty(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }))
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
    const files = Array.from(e.dataTransfer.files)
    handleImageUpload(files)
  }, [handleImageUpload])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Basic validation
    if (Object.entries(property).some(([key, value]) => key !== 'images' && value === '')) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      })
      return
    }
    if (property.images.length === 0) {
      toast({
        title: "Error",
        description: "Please upload at least one image",
        variant: "destructive",
      })
      return
    }
    // Here you would typically send the data to your backend
    console.log('Property data:', property)
    // Navigate to KYC/verification page
    // router.push('/kyc-verification')
  }

  return (
    <div className="max-w-8xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center">Add Your Property</h1>
      <div className="grid grid-cols-1 justify-between lg:grid-cols-2 gap-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Property Name</Label>
            <Input
              id="name"
              name="name"
              value={property.name}
              onChange={handleChange}
              placeholder="Enter property name"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="propertyType">Property Type</Label>
            <Select name="propertyType" onValueChange={(value) => handleSelectChange(value, 'propertyType')} required>
              <SelectTrigger>
                <SelectValue placeholder="Select property type" />
              </SelectTrigger>
              <SelectContent>
                {Object.values(PropertyType).map((type) => (
                  <SelectItem key={type} value={type}>{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="amount">Price (in ETH)</Label>
            <Input
              id="amount"
              name="amount"
              type="number"
              value={property.amount}
              onChange={handleChange}
              placeholder="Enter price in ETH"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="descriptions">Description</Label>
            <Textarea
              id="descriptions"
              name="descriptions"
              value={property.descriptions}
              onChange={handleChange}
              placeholder="Describe your property"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contacts">Contact Information</Label>
            <Input
              id="contacts"
              name="contacts"
              value={property.contacts}
              onChange={handleChange}
              placeholder="Enter contact information"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={property.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="available"
              checked={property.available}
              onCheckedChange={(checked) => setProperty(prev => ({ ...prev, available: checked }))}
            />
            <Label htmlFor="available">Available for Sale</Label>
          </div>

          <Button type="submit" className="w-full">Proceed to KYC/Verification</Button>
        </form>

        <div className="space-y-6">
        <ImageUpload images={property.images} onUpload={handleImageUpload} onDelete={handleImageDelete} />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {property.images.map((image, index) => (
              <div key={index} className="relative group">
                <img
                  src={URL.createObjectURL(image)}
                  alt={`Property image ${index + 1}`}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <button
                  onClick={() => handleImageDelete(index)}
                  className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
