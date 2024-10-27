import { useState } from 'react'
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Textarea } from "../ui/textarea"
import { Switch } from "../ui/switch"
import { Upload } from 'lucide-react'
import { Separator } from '../ui/separator'


export default function KYCVerification() {
  const [consentGiven, setConsentGiven] = useState(false)

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">KYC Verification</h1>
      
      <form className="  space-y-6">

        <div className='grid grid-cols-2'>
        <div>
          <Label htmlFor="fullName">Full Legal Name</Label>
          <Input id="fullName" placeholder="Enter your full legal name" />
        </div>

        <div>
          <Label htmlFor="dateOfBirth">Date of Birth</Label>
          <Input id="dateOfBirth" type="date" />
        </div>

        <div>
          <Label htmlFor="nationality">Nationality</Label>
          <Select>
            <SelectTrigger id="nationality">
              <SelectValue placeholder="Select your nationality" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="us">United States</SelectItem>
              <SelectItem value="uk">United Kingdom</SelectItem>
              <SelectItem value="ca">Canada</SelectItem>
              {/* Add more countries as needed */}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="idType">ID Type</Label>
          <Select>
            <SelectTrigger id="idType">
              <SelectValue placeholder="Select ID type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="passport">Passport</SelectItem>
              <SelectItem value="driverLicense">Driver's License</SelectItem>
              <SelectItem value="nationalId">National ID</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="idNumber">ID Number</Label>
          <Input id="idNumber" placeholder="Enter your ID number" />
        </div>

        <div>
          <Label htmlFor="address">Residential Address</Label>
          <Textarea id="address" placeholder="Enter your full residential address" />
        </div>

        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          <Upload className="mx-auto h-12 w-12 text-gray-400" />
          <p className="mt-2 text-sm text-gray-600">Drag and drop your ID document here, or click to select files</p>
          <Input id="file-upload" type="file" className="hidden" />
          <Label htmlFor="file-upload" className="mt-2 cursor-pointer inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
            Upload ID Document
          </Label>
        </div>

        </div>

        <div>

        <Separator className="my-8" />

        <h2 className="text-2xl font-semibold mb-4">Property Ownership Verification</h2>

        <div>
          <Label htmlFor="propertyAddress">Property Address</Label>
          <Input id="propertyAddress" placeholder="Enter the full address of the property you're listing" />
        </div>

        <div>
          <Label htmlFor="ownershipProofType">Ownership Proof Type</Label>
          <Select>
            <SelectTrigger id="ownershipProofType">
              <SelectValue placeholder="Select proof type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="deedOfSale">Deed of Sale</SelectItem>
              <SelectItem value="propertyTax">Property Tax Receipt</SelectItem>
              <SelectItem value="titleDeed">Title Deed</SelectItem>
              <SelectItem value="mortgageStatement">Mortgage Statement</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          <Upload className="mx-auto h-12 w-12 text-gray-400" />
          <p className="mt-2 text-sm text-gray-600">Drag and drop your ownership proof document here, or click to select files</p>
          <Input id="ownership-file-upload" type="file" className="hidden" />
          <Label htmlFor="ownership-file-upload" className="mt-2 cursor-pointer inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
            Upload Ownership Document
          </Label>
        </div>

        </div>

        <div className="flex items-center space-x-2">
          <Switch id="consent" checked={consentGiven} onCheckedChange={setConsentGiven} />
          <Label htmlFor="consent">
            I consent to the processing of my personal data for KYC purposes and confirm that I am the rightful owner of the property being listed
          </Label>
        </div>

        <Button className="w-full" disabled={!consentGiven}>
          Submit KYC and Property Verification
        </Button>
      </form>
    </div>
  )
}
