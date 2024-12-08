import React, { useEffect, useState } from 'react'
import Arrow from '../assets/images/icon-arrow.svg'
import IpAddressDetails from './IpAddressDetails'

const SearchByIpComponent = ({setLatitude,setLongitude}) => {

    const [ip, setIp] = useState("192.168.1.1");
    const [location, setLocation] = useState("Sri Lanka");
    const [timezone, setTimezone] = useState("UTC India");
    const [isp, setIsp] = useState("SLTMOBITEL");
    const [enteredIp, setEnteredIp] = useState('');


    useEffect(() => {
        getIpDetails();
    }, [])

    const getIpDetails = async (ipAddressToSearch = '') => {
        try {
            const url = ipAddressToSearch ? `https://geo.ipify.org/api/v2/country,city?apiKey=at_h2yJzPN8qppIqfVnQxhOS0kxihDGt&ipAddress=${ipAddressToSearch}` : 'https://geo.ipify.org/api/v2/country,city?apiKey=at_h2yJzPN8qppIqfVnQxhOS0kxihDGt';
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Data Fetching in API is failed.");
            }
            const data = await response.json();
            setIp(data.ip);
            setLocation(data.location.region + ", " + data.location.country);
            setTimezone(data.location.timezone);
            setIsp(data.isp || '--');
            setLatitude(data.location.lat);
            setLongitude(data.location.lng);
        } catch (error) {
            console.error('Error fetching advice:', error);
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Regular expression to match IPv4 and IPv6 addresses
        const ipRegex = /^(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)$/;

        if (!enteredIp || !ipRegex.test(enteredIp.trim())) {
            alert('Please enter a valid IPv4 address.');
            return;
        }

        // Fetch details for the entered IP
        getIpDetails(enteredIp.trim());

        setEnteredIp('');
    }

    return (
        <div className='md:bg-pattern-bg-desktop bg-pattern-bg-mobile bg-center bg-no-repeat bg-cover relative md:pb-32 pb-40'>
            <h1 className='text-center md:pt-10 pt-8 font-bold text-white text-2xl md:text-3xl'>IP Address Tracker</h1>
            <form method="post" onSubmit={handleSubmit}>
                <div className='rounded-xl overflow-hidden mx-auto mt-7 md:mt-10  md:w-1/2 w-4/5 flex shadow-lg'>
                    <input className='px-4 py-3 flex-1 transition-all duration-300 focus:border-0 md:text-[18px] text-[13px] outline-none focus:ring-0' type="text" value={enteredIp} placeholder='Search for any IP address or domain' onChange={(e) => (setEnteredIp(e.target.value))} />
                    <button className='bg-black p-4 hover:bg-gray-700 transition-all duration-200' type="submit"><img src={Arrow} alt="arrow" /></button>
                </div>
            </form>
            <IpAddressDetails ip={ip} location={location} timezone={timezone} isp={isp} />
        </div>
    )
}

export default SearchByIpComponent