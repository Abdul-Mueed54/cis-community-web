import { withPayload } from '@payloadcms/next/withPayload'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Build output is placed outside OneDrive to avoid junction point restrictions
  distDir: 'cis-next-build',
}

export default withPayload(nextConfig)