import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your standard Next.js configuration options go here
  reactStrictMode: true,
}

export default withPayload(nextConfig)