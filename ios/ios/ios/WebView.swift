//
//  WebView.swift
//  ios
//
//  Created by Younghoon Kim on 2023/04/05.
//

// GPT-4
//import UIKit
//import WebKit
//
//class ViewController: UIViewController, WKNavigationDelegate {
//
//    private var webView: WKWebView!
//
//    override func viewDidLoad() {
//        super.viewDidLoad()
//
//        // Create a WKWebView configuration
//        let webConfiguration = WKWebViewConfiguration()
//
//        // Initialize the WKWebView with the configuration
//        webView = WKWebView(frame: .zero, configuration: webConfiguration)
//
//        // Set the navigation delegate to self
//        webView.navigationDelegate = self
//
//        // Add the webView as a subview to your view
//        view.addSubview(webView)
//
//
//        // Set up constraints for the webView
//        webView.translatesAutoresizingMaskIntoConstraints = false
//        webView.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor).isActive = true
//        webView.bottomAnchor.constraint(equalTo: view.safeAreaLayoutGuide.bottomAnchor).isActive = true
//        webView.leadingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.leadingAnchor).isActive = true
//        webView.trailingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.trailingAnchor).isActive = true
//
//
//        // Create a URL
//        if let url = URL(string: "http://localhost:3000") {
//            // Create a URLRequest
//            let request = URLRequest(url: url)
//
//            // Load the URLRequest in the webView
//            webView.load(request)
//        }
//    }
//
//}


import SwiftUI
import WebKit

struct WebView: UIViewRepresentable {
    
    var url: String
    func makeUIView(context: Context) -> WKWebView {
        guard let url = URL(string: self.url) else {
            return WKWebView()
        }
        
        let webView = WKWebView()
        webView.load(URLRequest(url: url))
        return webView
    }
    
    func updateUIView(_ uiView: WKWebView, context: Context) {
    }
}


struct WebView_Preiviews: PreviewProvider {
    static var previews: some View {
        WebView(url: "http://localhost:3000")
    }
}
