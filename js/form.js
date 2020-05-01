// (function($) {
var token;
var code = 'event2019_1_series';
var resellerList, username, gender, age, email, mobile, city, area, zip, address, reseller_city, reseller_store;

function getToken() {
  $.ajax({
    url: 'https://contact.bmw.com.tw/api/Jwt/get?username=testdrive&passwd=AMxRM3gNNymg',
    method: "get",
    dataType: "text",
  }).done(function(res) {
    // console.log(res)
    token = res;
  }).fail(function(res) {
    console.log(res);
    // alert('操作失敗，請連絡服務人員');
  });
}

function setAgeSelect() {
  $.ajax({
    url: 'https://contact.bmw.com.tw/api/testdrive/getallage',
    method: "get",
    dataType: "json",
  }).done(function(res) {
    // console.log(res)
    $('#age').html('<option value="">選擇年齡</option>')
    res.forEach(function(item) {
      $('#age').append('<option value="' + item + '">' + item + '</option>')
    })
  }).fail(function(res) {
    console.log(res);
    // alert('操作失敗，請連絡服務人員');
  });
}

function setResellerSelect() {
  $.ajax({
    url: 'https://contact.bmw.com.tw/api/testdrive/getallreseller',
    method: "get",
    dataType: "json",
  }).done(function(res) {
    // console.log(res)
    resellerList = res;
    $('#reseller_city').html('<option value="">選擇地區</option>')
    resellerList['area'].forEach(function(item) {
      $('#reseller_city').append('<option value="' + item.name + '">' + item.name + '</option>')
    })
  }).fail(function(res) {
    console.log(res);
    // alert('操作失敗，請連絡服務人員');
  });
}

function setResellerStoreSelect(city) {
  $('#reseller_store').html('<option value="">選擇經銷商</option>')
  resellerList['area'].forEach(function(item) {
    if (item.name === city) {
      item.reseller.forEach(function(store) {
        $('#reseller_store').append('<option value="' + store + '">' + store + '</option>')
      })
    }
  })
}

function sendData(data) {
  gtag('event', 'Click', {
    'event_category': 'sent_btn',
    'event_label': 'sent_btn',
  });
  fbq('track', 'Lead');
  gtag_report_conversion();
  _lt('send', 'cv', {
    type: 'Conversion'
  }, ['f318243c-e326-4eae-ab95-2a016ce79687']);
  tpq('track', 'Lead');
  window.dotq = window.dotq || [];
  window.dotq.push({
    'projectId': '10000',
    'properties': {
      'pixelId': '10091768',
      'qstrings': {
        'et': 'custom',
        'ea': 'bmw_1er_201910'
      }
    }
  });




  $.ajax({
    url: "https://contact.bmw.com.tw/testdrive/process",
    method: "post",
    dataType: "json",
    headers: {
      "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
    },
    data: {
      username: username,
      gender: gender,
      age: age,
      email: email,
      mobile: mobile,
      city: city,
      area: area,
      zip: zip,
      address: address,
      reseller_city: reseller_city,
      reseller_store: reseller_store,
      code: code,
      token: token,
    }
  }).done(function(data) {
    console.log(data)
    var status = parseInt(data.status)
    if (status === 0) {
      alert(data.message)
      $("#agree").prop("checked", false);
      $('#username').val('');
      $('.sex_radio [name="gender"]').prop("checked", false);
      $('#age').val('');
      $('#email').val('');
      $('#mobile').val('');
      $('#twzipcode select[name="county"]').val('');
      $('#twzipcode select[name="district"]').val('');
      $('#twzipcode input[name="zipcode"]').val('');
      $('#reseller_city').val('');
      $('#reseller_store').val('');
    }
  }).fail(function(res) {
    var status = parseInt(res.responseJSON.status);
    console.log(status);
  });
}

function checkVal() {
  var isCheck = $("#agree").prop("checked");

  username = $('#username').val();
  gender = $('.sex_radio [name="gender"]:checked').val();
  age = $('#age').val();
  email = $('#email').val();
  mobile = $('#mobile').val();
  city = $('#twzipcode select[name="county"]').val();
  area = $('#twzipcode select[name="district"]').val();
  zip = $('#twzipcode input[name="zipcode"]').val();
  address = '';
  reseller_city = $('#reseller_city').val();
  reseller_store = $('#reseller_store').val();

  // console.log('isCheck:' + isCheck);
  // console.log('username:' + username);
  // console.log('gender:' + gender);
  // console.log('age:' + age);
  // console.log('email:' + email);
  // console.log('mobile:' + mobile);
  // console.log('city:' + city);
  // console.log('area:' + area);
  // console.log('zip:' + zip);
  // console.log('address:' + address);
  // console.log('reseller_city:' + reseller_city);
  // console.log('reseller_store:' + reseller_store);

  if (!username) {
    alert("請輸入您的姓名");
  } else if (!gender) {
    alert("請選擇您的性別");
  } else if (!age) {
    alert("請選擇您的年齡");
  } else if (!email || !/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})*$/.test(email)) {
    alert("請輸入Email");
  } else if (!mobile || mobile.length != 10 || !/^(([\+]([\d]{2,}))([0-9\.\-\/\s]{5,})|([0-9\.\-\/\s]{5,}))*$/.test(mobile)) {
    alert("請輸入您的聯絡電話");
  } else if (!city) {
    alert("請選擇縣市");
  } else if (!area) {
    alert("請選擇區域");
  } else if (!reseller_city) {
    alert("請選擇經銷商地區");
  } else if (!reseller_store) {
    alert("請選擇經銷商");
  } else if (!isCheck) {
    alert("請先閱讀條款，並勾選同意");
  } else {

    var r = confirm("親愛的" + username + "，以上資料已確認無誤？")
    if (r == true) {
      sendData();
    }
  }
}


$(document).ready(function() {
    getToken();
    setAgeSelect();
    setResellerSelect();
    $('#reseller_city').on('change', function() {
      setResellerStoreSelect($(this).val())
    })
    $('#twzipcode').twzipcode({
      // 'zipcodeSel': '101', // 此參數會優先於 countySel, districtSel
      // 'countySel': '臺北市',
      // 'districtSel': '信義區',
    });
    $('input[name="zipcode"]').attr('placeholder', '')

    $('#sentBtn').on('click', checkVal)

  })
  // })($)