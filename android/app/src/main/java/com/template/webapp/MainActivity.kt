package com.template.webapp

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.webkit.*

class MainActivity : AppCompatActivity() {

    private lateinit var webView: WebView
    private val url = "https://polite-kringle-5bd3f6.netlify.app/" // 원하는 웹 페이지 URL

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        webView = findViewById(R.id.webView)
        webView.webViewClient = WebViewClient() // 클릭시 새창 안뜨게

        val webSettings = webView.settings
        webSettings.javaScriptEnabled = true // 자바스크립트 허용
        webSettings.loadWithOverviewMode = true // 웹뷰가 html 컨텐츠를 모두 보여주게 설정
        webSettings.useWideViewPort = true // 화면 사이즈 맞추기 허용 여부
        webSettings.builtInZoomControls = true // 확대 축소 허용 여부
        webSettings.displayZoomControls = false // 돋보기 없애기
        webSettings.domStorageEnabled = true
        webSettings.cacheMode = WebSettings.LOAD_NO_CACHE // 캐시 사용여부
        webView.setOnTouchListener { _, _ ->
            false
        }

        webView.webChromeClient = WebChromeClient()
        webView.webViewClient = object : WebViewClient() {
            override fun onReceivedError(
                view: WebView?,
                request: WebResourceRequest?,
                errorResponse: WebResourceError?
            ) {
                // 오류 발생 시 로컬 캐시를 사용하지 않도록 설정
                view?.settings?.cacheMode = WebSettings.LOAD_NO_CACHE
                super.onReceivedError(view, request, errorResponse)
            }
        }

        webView.loadUrl(url)
    }

    override fun onBackPressed() {
        if (webView.canGoBack()) {
            webView.goBack()
        } else {
            super.onBackPressed()
        }
    }
}
