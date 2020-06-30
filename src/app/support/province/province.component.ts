import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-province',
  templateUrl: './province.component.html',
  styleUrls: ['./province.component.css']
})
export class ProvinceComponent implements OnInit {
  provinces1 = [
    ['An Giang', 296],
    ['Bà Rịa - Vũng Tàu', 254],
    ['Bắc Cạn', 209],
    ['Bắc Giang', 204],
    ['Bạc Liêu', 291],
    ['Bắc Ninh', 222],
    ['Bến Tre', 275],
    ['Bình Định', 256],
    ['Bình Dương', 274],
    ['Bình Phước', 271],
    ['Bình Thuận', 252],
    ['Cà Mau', 290],
    ['Cần Thơ', 292],
    ['Cao Bằng', 206],
    ['Đà Nẵng', 236],
    ['Đắk Lắk', 262],
    ['Đắk Nông', 261],
    ['Điện Biên', 215],
    ['Đồng Nai', 251],
    ['Đồng Tháp', 277],
    ['Gia Lai', 269],
    ['Hà Giang', 219],
    ['Hà Nam', 226],
    ['Hà Nội', 24],
    ['Hà Tĩnh', 239],
    ['Hải Dương', 220],
    ['Hải Phòng', 225],
    ['Hậu Giang', 293],
    ['Hồ Chí Minh', 28],
    ['Hòa Bình', 218],
    ['Hưng Yên', 221],
    ['Khánh Hoà', 258]
  ];
  provinces2 = [
    ['Kiên Giang', 297],
    ['Kon Tum', 260],
    ['Lai Châu', 213],
    ['Lâm Đồng', 263],
    ['Lạng Sơn', 205],
    ['Lào Cai', 214],
    ['Long An', 272],
    ['Nam Định', 228],
    ['Nghệ An', 238],
    ['Ninh Bình', 229],
    ['Ninh Thuận', 259],
    ['Phú Thọ', 210],
    ['Phú Yên', 257],
    ['Quảng Bình', 232],
    ['Quảng Nam', 235],
    ['Quảng Ngãi', 255],
    ['Quảng Ninh', 203],
    ['Quảng Trị', 233],
    ['Sóc Trăng', 299],
    ['Sơn La', 212],
    ['Tây Ninh', 276],
    ['Thái Bình', 227],
    ['Thái Nguyên', 208],
    ['Thanh Hóa', 237],
    ['Thừa Thiên - Huế', 234],
    ['Tiền Giang', 273],
    ['Trà Vinh', 294],
    ['Tuyên Quang', 207],
    ['Vĩnh Long', 270],
    ['Vĩnh Phúc', 211],
    ['Yên Bái', 216]
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
