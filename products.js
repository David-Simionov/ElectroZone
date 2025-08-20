const products = [
    {
        id: 1,
        title: "MacBook Pro",
        price: 1999.00,
        brand: "Apple",
        category: "Laptops",
        image: "images/macbookpro_14_inch_white_05-removebg-preview.png",
        description: "Compact yet powerful 14-inch MacBook Pro with Apple M1 Pro chip.",
        discount: { type: "percent", value: 10 },
        specifications: {
            "Display": "14.2-inch Liquid Retina XDR",
            "Processor": "Apple M1 Pro (8-core CPU, 14-core GPU)",
            "RAM": "16GB unified memory",
            "Storage": "512GB SSD",
            "Battery Life": "Up to 17 hours",
            "Ports": "HDMI, SDXC, MagSafe 3, 3x Thunderbolt 4",
            "Weight": "1.6kg"
        }
    },
    {
        id: 2,
        title: "Samsung Galaxy S24 Ultra",
        price: 1000.00,
        brand: "Samsung",
        category: "Phones",
        image: "images/Samsung-Galaxy-S24-Ultra-Titanium-Violet-Smartphone-transparent-PNG-image-jpg-removebg-preview.png",
        description: "High-end smartphone with amazing camera.",
        specifications: {
            "Processor": "Snapdragon 8 Gen 2",
            "RAM": "12GB",
            "Storage": "256GB",
            "Display": "6.8-inch AMOLED",
            "Camera": "200MP + 12MP + 10MP",
            "Battery": "5000mAh"
        }
    },
    {
        id: 3,
        title: "Sony WH-H900N",
        price: 299.00,
        brand: "Sony",
        category: "Headphones",
        image: "images/images-removebg-preview.png",
        description: "Noise-cancelling wireless over-ear headphones.",
        specifications: {
            "Type": "Over-ear",
            "Noise Cancelling": "Yes (Digital Noise Cancelling)",
            "Battery Life": "Up to 28 hours",
            "Connectivity": "Bluetooth 4.1, NFC",
            "Quick Charge": "10 minutes charge for 1 hour of playback",
            "Weight": "289g",
            "Water Resistance": "IPX4"
        }

    },
    {
        id: 4,
        title: "Asus ROG STRIX SCAR",
        price: 1199.00,
        brand: "Asus",
        category: "Laptops",
        image: "images/12-120073_laptop-asus-gaming-hd-png-download-removebg-preview.png",
        description: "Performance laptop for productivity and gaming.",
        specifications: {
            "Processor": "Intel i7 11th Gen",
            "RAM": "16GB DDR4",
            "Storage": "1TB SSD",
            "Display": "15.6-inch FHD",
            "GPU": "NVIDIA RTX 3060",
            "Battery Life": "Up to 8 hours"
        }
    },
    {
        id: 5,
        title: "iPhone 16 Pro Max",
        price: 999.00,
        brand: "Apple",
        category: "Phones",
        image: "images/iPhone-16-Pro-Max-Latest-Apple-Smartphone-jpg-removebg-preview.png",
        description: "Mid-range phone with AMOLED display.",
        specifications: {
            "Processor": "A17 Bionic",
            "RAM": "8GB",
            "Storage": "128GB",
            "Display": "6.7-inch AMOLED",
            "Camera": "48MP + 12MP + 12MP",
            "Battery": "4350mAh"
        }
    },
    {
        id: 6,
        title: "Huawei Smart Watch",
        price: 79.99,
        brand: "Huawei",
        category: "Smart Watches",
        image: "images/pngtree-smart-watch-png-image_14171827.png",
        description: "Smartwatch with fitness tracking and notifications.",
        specifications: {
            "Display": "1.75-inch AMOLED",
            "Battery Life": "14 days",
            "Water Resistant": "5ATM",
            "Connectivity": "Bluetooth 5.1",
            "Sensors": "Heart rate, SpO2, Accelerometer"
        }
    },
    {
        id: 7,
        title: "MacBook Air M2",
        price: 1099.99,
        brand: "Apple",
        category: "Laptops",
        image: "images/mockup_apple_macbook_pro_16_2021_4e42d424b1-removebg-preview.png",
        description: "Lightweight and powerful laptop with M2 chip.",
        discount: { type: "percent", value: 8 },
        specifications: {
            "Display": "13.6-inch Liquid Retina",
            "Processor": "Apple M2",
            "RAM": "8GB",
            "Storage": "256GB SSD",
            "Battery Life": "Up to 18 hours"
        }
    },
    {
        id: 8,
        title: "Dell XPS 13",
        price: 999.99,
        brand: "Dell",
        category: "Laptops",
        image: "images/new-dell-xps-13-9300-laptop-724Vkn7-600-removebg-preview.png",
        description: "Compact and powerful ultrabook with InfinityEdge display.",
        specifications: {
            "Display": "13.4-inch FHD+",
            "Processor": "Intel Core i7-1165G7",
            "RAM": "16GB",
            "Storage": "512GB SSD",
            "Weight": "1.2kg"
        }
    },
    {
        id: 9,
        title: "Lenovo Legion 5",
        price: 1299.99,
        brand: "Lenovo",
        category: "Laptops",
        image: "images/Lenovo_Legion_5_Pro_Gen_7_Front_Facing.png",
        description: "Gaming laptop with powerful GPU and cooling system.",
        specifications: {
            "Display": "16-inch QHD",
            "Processor": "AMD Ryzen 7",
            "GPU": "NVIDIA RTX 3070",
            "RAM": "16GB",
            "Storage": "1TB SSD"
        }
    },
    {
        id: 10,
        title: "iPhone 15",
        price: 999.99,
        brand: "Apple",
        category: "Phones",
        image: "images/apple-blue-iphone-15-hd-transparent-background-11694998848nku0fbbaho-removebg-preview.png",
        description: "Latest Apple iPhone with A17 chip and Dynamic Island.",
        specifications: {
            "Display": "6.1-inch Super Retina XDR",
            "Processor": "A17 Pro",
            "Storage": "256GB",
            "Camera": "48MP dual-camera",
            "Battery Life": "Up to 20 hours"
        }
    },
    {
        id: 11,
        title: "Sennheiser HD 660S",
        price: 499.99,
        brand: "Sennheiser",
        category: "Headphones",
        image: "images/91dWDj25eYL._UF894_1000_QL80_-removebg-preview.png",
        description: "Experience premium sound and noise cancellation.",
        specifications: {
            "Type": "Over-ear",
            "Noise Cancelling": "Yes (Digital)",
            "Battery Life": "Up to 28 hours",
            "Connectivity": "Bluetooth 4.1, NFC",
            "Quick Charge": "10 min = 60 min playback",
            "Weight": "289g"
        }
    },
    {
        id: 12,
        title: "Google Pixel 8",
        price: 799.99,
        brand: "Google",
        category: "Phones",
        image: "images/pngtree-google-pixel-8-pro-png-image_20345831.png",
        description: "Pure Android experience with Tensor G3 chip.",
        specifications: {
            "Display": "6.2-inch OLED",
            "Processor": "Google Tensor G3",
            "Camera": "50MP wide, 12MP ultrawide",
            "Battery": "4575mAh",
            "OS": "Android 14"
        }
    },
    {
        id: 13,
        title: "Sony WH-1000XM5",
        price: 349.99,
        brand: "Sony",
        category: "Headphones",
        image: "images/sony-wh-1000xm5-black-1-550x550.webp",
        description: "Premium noise cancelling over-ear headphones.",
        discount: { type: "percent", value: 15 },
        specifications: {
            "Type": "Over-ear",
            "Noise Cancelling": "Industry-leading ANC",
            "Battery Life": "Up to 30 hours",
            "Weight": "250g",
            "Connectivity": "Bluetooth 5.2"
        }
    },
    {
        id: 14,
        title: "Apple AirPods Pro 2",
        price: 249.99,
        brand: "Apple",
        category: "Headphones",
        image: "images/111851_sp880-airpods-Pro-2nd-gen.png",
        description: "Wireless earbuds with adaptive transparency and ANC.",
        specifications: {
            "Type": "In-ear",
            "Chip": "H2",
            "Battery Life": "Up to 6 hours (30 with case)",
            "Noise Cancelling": "Active",
            "Water Resistance": "IPX4"
        }
    },
    {
        id: 15,
        title: "Samsung Galaxy Buds 2 Pro",
        price: 229.99,
        brand: "Samsung",
        category: "Headphones",
        image: "images/samsung-buds-2-pro.webp",
        description: "Compact earbuds with intelligent ANC and 360 audio.",
        specifications: {
            "Type": "In-ear",
            "Battery Life": "Up to 8 hours (29 with case)",
            "Water Resistance": "IPX7",
            "Audio": "Hi-Fi 24-bit",
            "Weight": "5.5g each"
        }
    },
    {
        id: 16,
        title: "Fitbit Versa 4",
        price: 179.99,
        brand: "Fitbit",
        category: "Smart Watches",
        image: "images/Fitbit-Versa4.original_iCWfSdB-removebg-preview.png",
        description: "Fitness-focused smartwatch with sleep tracking.",
        specifications: {
            "Display": "1.34-inch AMOLED",
            "Battery Life": "6+ days",
            "Water Resistant": "Yes",
            "Features": "Heart rate, SpO2, Sleep, GPS"
        }
    },
    {
        id: 17,
        title: "Apple Watch Series 9",
        price: 429.99,
        brand: "Apple",
        category: "Smart Watches",
        image: "images/apple-watch-series-9-midnight-hd-transparent-png-116949941870prkq6f9wl-removebg-preview.png",
        description: "Advanced smartwatch with double tap gestures.",
        specifications: {
            "Display": "Always-On Retina",
            "Chip": "S9",
            "Battery Life": "Up to 18 hours",
            "Health Sensors": "Heart rate, ECG, Blood Oxygen"
        }
    },
    {
        id: 18,
        title: "Garmin Venu 3",
        price: 399.99,
        brand: "Garmin",
        category: "Smart Watches",
        image: "images/1.png",
        description: "Premium fitness watch with AMOLED screen and body battery.",
        specifications: {
            "Display": "1.4-inch AMOLED",
            "Battery Life": "14 days",
            "Water Resistant": "5ATM",
            "GPS": "Built-in",
            "Sleep Tracking": "Yes"
        }
    },
    {
        id: 19,
        title: "PlayStation 5",
        price: 499.99,
        brand: "Sony",
        category: "Console",
        image: "images/playstation-5-sony-ps5-side-view-with-controller-701751695142204cgnpwtopeb-removebg-preview.png",
        description: "Next-gen gaming console with 4K support and fast SSD.",
        specifications: {
            "Storage": "825GB SSD",
            "Resolution": "4K @ 120Hz",
            "Processor": "AMD Ryzen Zen 2",
            "Controller": "DualSense"
        }
    },
    {
        id: 20,
        title: "Xbox Series X",
        price: 499.99,
        brand: "Microsoft",
        category: "Console",
        image: "images/console-of-xbox-series-x-with-controller-7017516951424723dwa3ncuul-removebg-preview.png",
        description: "Powerful console for immersive 4K gaming.",
        specifications: {
            "Storage": "1TB SSD",
            "Resolution": "4K UHD",
            "Processor": "AMD Zen 2 + RDNA 2",
            "Backward Compatibility": "Yes"
        }
    },
    {
        id: 21,
        title: "Nintendo Switch OLED",
        price: 349.99,
        brand: "Nintendo",
        category: "Console",
        image: "images/G03-removebg-preview.png",
        description: "Hybrid gaming console with OLED display and detachable Joy-Cons.",
        specifications: {
            "Display": "7-inch OLED",
            "Modes": "TV, Tabletop, Handheld",
            "Storage": "64GB",
            "Battery": "4.5 – 9 hours"
        }
    },
    {
        id: 22,
        title: "Razer Blade 16",
        price: 2599.99,
        brand: "Razer",
        category: "Laptops",
        image: "images/9668-1-en-v2.png",
        description: "Powerful gaming laptop with Mini LED display.",
        specifications: {
            "Display": "16-inch Dual-Mode Mini LED",
            "Processor": "Intel Core i9",
            "GPU": "NVIDIA RTX 4080",
            "RAM": "32GB",
            "Storage": "1TB SSD"
        }
    },
    {
        id: 23,
        title: "Asus ROG Phone 7",
        price: 999.99,
        brand: "Asus",
        category: "Phones",
        image: "images/4A2BCCC6-B9D8-47A5-AD7F-501E30A462A9.png",
        description: "Gaming phone with cooling system and high refresh rate.",
        specifications: {
            "Display": "6.78-inch AMOLED 165Hz",
            "Processor": "Snapdragon 8 Gen 2",
            "Cooling": "AeroActive Cooler 7",
            "RAM": "16GB",
            "Battery": "6000mAh"
        }
    },
    {
        id: 24,
        title: "Beats Studio Pro",
        price: 349.99,
        brand: "Beats",
        category: "Headphones",
        image: "images/426047-Product-0-I-638284387533026772_5376b857-a30c-426e-8d70-075927df2622_1024x1024-removebg-preview.png",
        description: "Studio-quality headphones with Spatial Audio.",
        specifications: {
            "Type": "Over-ear",
            "Audio": "Spatial Audio with Dolby Atmos",
            "Battery Life": "Up to 40 hours",
            "Connectivity": "Bluetooth, USB-C"
        }
    },
    {
        id: 25,
        title: "Huawei Watch GT 4",
        price: 219.99,
        brand: "Huawei",
        category: "Smart Watches",
        image: "images/fee_786_587_png.webp",
        description: "Elegant smartwatch with long battery and wellness tracking.",
        specifications: {
            "Display": "1.43-inch AMOLED",
            "Battery Life": "Up to 14 days",
            "Health Tracking": "Heart rate, SpO2, Sleep",
            "GPS": "Dual-band"
        }
    },
    {
        id: 26,
        title: "Steam Deck",
        price: 399.99,
        brand: "Valve",
        category: "Console",
        image: "images/extremerate-austausch-gehause-durchsichtig-transparent-steam-deck-mod-gehause-483396-removebg-preview.png",
        description: "Portable gaming PC with access to full Steam library.",
        specifications: {
            "Display": "7-inch LCD touchscreen",
            "Storage": "512GB NVMe SSD",
            "OS": "SteamOS 3.0",
            "Controller": "Built-in + gyro",
            "Battery": "40Wh"
        }
    }

];
