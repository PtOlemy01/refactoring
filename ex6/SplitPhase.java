import org.codehaus.jackson.map.ObjectMapper;

import java.io.File;
import java.io.IOException;
import java.nio.file.Paths;
import java.util.stream.Stream;

public class SplitPhase {
// 최초 소스.
//    public static void main(String[] args){
//        try {
//            if(args.length == 0) throw new RuntimeException(("파일명을 입력하세요."));
//            String fileName = args[args.length -1];
//            File input = Paths.get(fileName).toFile();
//            ObjectMapper mapper = new ObjectMapper();
//
//            Order[] orders = mapper.readValue(input, Order[].class);
//            if(Stream.of(args).anyMatch(arg -> "-r".equals(arg)))
//                System.out.println(Stream.of(orders)
//                        .filter(o -> "ready".equals(o.status))
//                        .count());
//            else
//                System.out.println((orders.length));
//        } catch (IOException e) {
//            System.err.println(e);
//            System.exit(1);
//        }
//    }

// 출력 소스를 메인으로 옮김.
//    public static void main(String[] args){
//        try {
//            System.out.print(run(args));
//        } catch (IOException e) {
//            System.err.println(e);
//            System.exit(1);
//        }
//    }
//
//    private static long run(String[] args) throws IOException {
//        if(args.length == 0) throw new RuntimeException(("파일명을 입력하세요."));
//        String fileName = args[args.length -1];
//        File input = Paths.get(fileName).toFile();
//        ObjectMapper mapper = new ObjectMapper();
//
//        Order[] orders = mapper.readValue(input, Order[].class);
//        if(Stream.of(args).anyMatch(arg -> "-r".equals(arg)))
//            return Stream.of(orders)
//                    .filter(o -> "ready".equals(o.status))
//                    .count();
//        else
//            return orders.length;
//    }

    // 중간 데이터 구조 추가 ( CommandLine)
//    public static void main(String[] args){
//        try {
//            System.out.print(run(args));
//        } catch (IOException e) {
//            System.err.println(e);
//            System.exit(1);
//        }
//    }
//
//    private static long run(String[] args) throws IOException {
//        if(args.length == 0) throw new RuntimeException(("파일명을 입력하세요."));
//        CommandLine commandLine = new CommandLine();
//        String fileName = args[args.length -1];
//        return countOrders(commandLine, args, fileName);
//    }
//
//    private static long countOrders(CommandLine commandLine, String[] args, String fileName) throws IOException {
//        File input = Paths.get(fileName).toFile();
//        ObjectMapper mapper = new ObjectMapper();
//
//        Order[] orders = mapper.readValue(input, Order[].class);
//        if(Stream.of(args).anyMatch(arg -> "-r".equals(arg)))
//            return Stream.of(orders)
//                    .filter(o -> "ready".equals(o.status))
//                    .count();
//        else
//            return orders.length;
//    }
//
//    private static class CommandLine{}

//    조건식을 변수로 추출.
//    public static void main(String[] args){
//        try {
//            System.out.print(run(args));
//        } catch (IOException e) {
//            System.err.println(e);
//            System.exit(1);
//        }
//    }
//
//    private static long run(String[] args) throws IOException {
//        if(args.length == 0) throw new RuntimeException(("파일명을 입력하세요."));
//        CommandLine commandLine = new CommandLine();
//        String fileName = args[args.length -1];
//        return countOrders(commandLine, args, fileName);
//    }
//
//    private static long countOrders(CommandLine commandLine, String[] args, String fileName) throws IOException {
//        File input = Paths.get(fileName).toFile();
//        ObjectMapper mapper = new ObjectMapper();
//
//        Order[] orders = mapper.readValue(input, Order[].class);
//        boolean onlyCountReady = Stream.of(args).anyMatch(arg -> "-r".equals(arg));
//        if(onlyCountReady)
//            return Stream.of(orders).filter(o -> "ready".equals(o.status)).count();
//        else
//            return orders.length;
//    }
//
//    private static class CommandLine{}

//    최종소스
//    public static void main(String[] args){
//        try {
//            System.out.print(run(args));
//        } catch (IOException e) {
//            System.err.println(e);
//            System.exit(1);
//        }
//    }
//
//    private static long run(String[] args) throws IOException {
//        return countOrders(parseCommandLine(args));
//    }
//
//    private static CommandLine parseCommandLine(String[] args){
//        if(args.length == 0) throw new RuntimeException(("파일명을 입력하세요."));
//
//        CommandLine result = new CommandLine();
//        result.fileName = args[args.length -1];
//        result.onlyCountReady = Stream.of(args).anyMatch(arg -> "-r".equals(arg));
//
//        return result;
//    }
//
//    private static long countOrders(CommandLine commandLine) throws IOException {
//        File input = Paths.get(commandLine.fileName).toFile();
//        ObjectMapper mapper = new ObjectMapper();
//
//        Order[] orders = mapper.readValue(input, Order[].class);
//
//        if(commandLine.onlyCountReady)
//            return Stream.of(orders).filter(o -> "ready".equals(o.status)).count();
//        else
//            return orders.length;
//    }
//
//    private static class CommandLine{
//        boolean onlyCountReady;
//        String fileName;
//    }

    public static void main(String[] args){
        try {
            System.out.print(run(args));
        } catch (IOException e) {
            System.err.println(e);
            System.exit(1);
        }
    }

    private static long run(String[] args) throws IOException {
        return countOrders(new CommandLine(args));
    }

    private static long countOrders(CommandLine commandLine) throws IOException {
        File input = Paths.get(commandLine.filename()).toFile();
        ObjectMapper mapper = new ObjectMapper();
        Order[] orders = mapper.readValue(input, Order[].class);
        if(commandLine.onlyCountReady())
            return Stream.of(orders).filter(o -> "ready".equals(o.status)).count();
        else
            return orders.length;
    }
}
