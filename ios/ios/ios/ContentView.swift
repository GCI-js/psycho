//
//  ContentView.swift
//  ios
//
//  Created by Younghoon Kim on 2023/04/05.
//

import SwiftUI
import UIKit
import WebKit


struct ContentView: View {
    var body: some View {
        NavigationView{
//            VStack {
//                Image(systemName: "globe")
//                    .imageScale(.large)
//                    .foregroundColor(.accentColor)
//                Text("Hello, world!")
//            }
//            .padding()
//            NavigationLink(destination: WebView(url: "localhost:3000")){Text("PSYCHO")}.padding()
            
            WebView(url: "http://localhost:3000")
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
